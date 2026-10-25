import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import {
  createMarkdownRenderer,
  type MarkdownOptions,
  type MarkdownRenderer
} from 'vitepress';

export const srcDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);
export const hostname = 'https://blog.icehoney.me/';
export const pageSize = 3;

export const markdown: MarkdownOptions = {
  lineNumbers: true,
  theme: 'github-light',
  languageAlias: { apacheconf: 'apache' }
};

export interface Post {
  /** Source file relative to srcDir, e.g. posts/2013/2013-02-07-start-blog.md */
  file: string;
  /** Public URL, e.g. /posts/2013-02-07-start-blog/ */
  url: string;
  title: string;
  /** Date as written in the frontmatter, e.g. 2013-02-07 21:30 */
  date: string;
  /** Publish time in ms, frontmatter dates are treated as Tokyo time */
  time: number;
  tags: string[];
  archive: string;
  content: string;
}

// Same rules as VuePress 1, so the post URLs stay unchanged
const DATE_RE = /(\d{4}-\d{1,2}(-\d{1,2})?)-(.*)/;
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;
const rCombining = /[̀-ͯ]/g;

function slugify(str: string) {
  return str
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase();
}

const pad = (n: number) => String(n).padStart(2, '0');

function postUrl(file: string, date: string) {
  const name = path.basename(file, '.md');
  const slug = slugify(name.match(DATE_RE)?.[3] ?? name);
  const [year, month, day] = date.split('-').map(s => parseInt(s, 10));
  return `/posts/${year}-${pad(month)}-${pad(day)}-${encodeURI(slug)}/`;
}

function parseTime(date: string) {
  const [, y, mo, d, h = '0', mi = '0'] =
    date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{2}))?/) ?? [];
  return Date.UTC(+y, +mo - 1, +d, +h - 9, +mi);
}

function toArray(value: unknown): string[] {
  if (value == null) return [];
  return (Array.isArray(value) ? value : [value]).map(String);
}

/** All posts, newest first */
export function getPosts(): Post[] {
  const postsDir = path.join(srcDir, 'posts');
  return fs
    .readdirSync(postsDir, { recursive: true, encoding: 'utf8' })
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const { data, content } = matter(
        fs.readFileSync(path.join(postsDir, file), 'utf8')
      );
      const date = String(data.date);
      const relative = path.posix.join('posts', file.split(path.sep).join('/'));
      return {
        file: relative,
        url: postUrl(relative, date),
        title: String(data.title),
        date,
        time: parseTime(date),
        tags: toArray(data.tags),
        archive: String(data.archives),
        content
      };
    })
    .sort((a, b) => b.time - a.time);
}

let renderer: Promise<MarkdownRenderer> | undefined;

function getRenderer() {
  return (renderer ??= createMarkdownRenderer(srcDir, markdown, '/'));
}

function env(post: Post) {
  return {
    path: path.join(srcDir, post.file),
    relativePath: post.url.slice(1) + 'index.md',
    cleanUrls: false
  };
}

const htmlCache = new Map<string, Promise<string>>();

/** The post rendered to HTML, the same way VitePress renders its page */
export function renderPost(post: Post) {
  let html = htmlCache.get(post.file);
  if (!html) {
    html = getRenderer().then(md => md.render(post.content, env(post)));
    htmlCache.set(post.file, html);
  }
  return html;
}

const stripTags = (html: string) => html.replace(/<[^>]*>/g, '').trim();

/** Plain text of the first paragraph */
export async function getExcerpt(post: Post) {
  const md = await getRenderer();
  const tokens = md.parse(post.content, env(post));
  const index = tokens.findIndex(token => token.type === 'paragraph_open');
  return index < 0 ? '' : stripTags(md.renderInline(tokens[index + 1].content));
}

/** h2 and h3 headings with their anchor ids */
export async function getHeaders(post: Post) {
  const md = await getRenderer();
  const tokens = md.parse(post.content, env(post));
  return tokens.flatMap((token, i) =>
    token.type === 'heading_open' && ['h2', 'h3'].includes(token.tag)
      ? [
          {
            title: stripTags(md.renderInline(tokens[i + 1].content)),
            slug: token.attrGet('id') ?? ''
          }
        ]
      : []
  );
}

/** Params for paginated lists that show the full content of each post */
export async function listPages(
  posts: Post[],
  link: (page: number) => string,
  title: (page: number) => string
) {
  const count = Math.ceil(posts.length / pageSize);
  return Promise.all(
    Array.from({ length: count }, async (_, i) => {
      const page = i + 1;
      const items = posts.slice(i * pageSize, page * pageSize);
      return {
        page,
        title: title(page),
        prev: page > 1 ? encodeURI(link(page - 1)) : null,
        next: page < count ? encodeURI(link(page + 1)) : null,
        posts: await Promise.all(
          items.map(async post => ({
            title: post.title,
            url: post.url,
            date: post.date,
            tags: post.tags,
            html: await renderPost(post)
          }))
        )
      };
    })
  );
}
