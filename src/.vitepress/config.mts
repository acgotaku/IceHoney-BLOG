import fs from 'node:fs';
import path from 'node:path';
import { Feed } from 'feed';
import {
  defineConfigWithTheme,
  resolvePages,
  type HeadConfig,
  type SiteConfig
} from 'vitepress';
import {
  getExcerpt,
  getPageExcerpt,
  getPosts,
  hostname,
  markdown,
  readPost,
  srcDir
} from './posts';
import type { ThemeConfig } from './theme/types';

const title = 'IceHoney';
const description = 'IceHoney是雪月秋水君的博客~ 记录秋水君生活的点点滴滴~';
// The end year is the build year
const copyright = `2013 - ${new Date().getFullYear()} © Ice Honey`;
const feeds = {
  rss: { file: 'rss.xml', type: 'application/rss+xml', name: 'RSS' },
  atom: { file: 'feed.atom', type: 'application/atom+xml', name: 'Atom' },
  json: { file: 'feed.json', type: 'application/json', name: 'JSON' }
};
const postsDir = path.join(srcDir, 'posts');

const isPostFile = (file: string) => /^posts\/.+\.md$/.test(file);

/** Meta descriptions should stay short */
function summarize(text: string, max = 120) {
  return text.length > max ? text.slice(0, max) + '…' : text;
}

/**
 * VitePress 1.6 resolves dynamic routes once, so in dev the paginated lists
 * would keep showing old posts. Resolve them again, drop the list pages that
 * were already compiled, and let an open list page reload (see theme/index.ts).
 */
async function refreshDynamicRoutes(server: {
  config: object;
  moduleGraph: {
    getModuleById(id: string): any;
    invalidateModule(mod: any): void;
  };
  ws: { send(type: string, data?: unknown): void };
}) {
  const siteConfig = (server.config as { vitepress: SiteConfig }).vitepress;
  Object.assign(
    siteConfig,
    await resolvePages(
      siteConfig.srcDir,
      siteConfig.userConfig,
      siteConfig.logger
    )
  );
  for (const route of siteConfig.dynamicRoutes.routes) {
    const mod = server.moduleGraph.getModuleById(route.fullPath);
    if (mod) server.moduleGraph.invalidateModule(mod);
  }
  server.ws.send('icehoney:posts-changed');
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  title,
  description,
  outDir: '../dist',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#8191f1' }],
    ...Object.values(feeds).map(
      ({ file, type, name }) =>
        [
          'link',
          {
            rel: 'alternate',
            type,
            href: hostname + file,
            title: `${title} ${name} Feed`
          }
        ] as [string, Record<string, string>]
    ),
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XS3V4JFZ2P'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XS3V4JFZ2P');"
    ]
  ],
  markdown,
  sitemap: { hostname },
  // Header height plus 1rem, same as scroll-padding-top in base.css
  scrollOffset: 80,
  // Keep the VuePress URLs: posts/:date-:slug/, and every page as a directory
  rewrites(page) {
    if (isPostFile(page))
      return decodeURI(readPost(page).url).slice(1) + 'index.md';
    if (page === 'page/1.md') return 'index.md';
    if (!page.endsWith('index.md')) return page.replace(/\.md$/, '/index.md');
    return page;
  },
  async transformPageData(pageData) {
    if (pageData.params?.title) {
      pageData.title = pageData.params.title;
    }
    // Describe posts and other pages by their first paragraph
    if (!pageData.params && !pageData.isNotFound) {
      const text = await getPageExcerpt(
        pageData.filePath,
        pageData.relativePath
      );
      if (text) pageData.description = summarize(text);
    }
  },
  transformHead({ pageData, description }) {
    if (pageData.isNotFound) return [];
    const url =
      hostname +
      encodeURI(pageData.relativePath.replace(/(^|\/)index\.md$/, '$1'));
    const isPost = isPostFile(pageData.filePath);
    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: url }],
      [
        'meta',
        { property: 'og:type', content: isPost ? 'article' : 'website' }
      ],
      ['meta', { property: 'og:site_name', content: title }],
      ['meta', { property: 'og:title', content: pageData.title || title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: hostname + 'profile.png' }],
      ['meta', { name: 'twitter:card', content: 'summary' }]
    ];
    if (isPost) {
      const published = new Date(readPost(pageData.filePath).time);
      head.push([
        'meta',
        { property: 'article:published_time', content: published.toISOString() }
      ]);
    }
    return head;
  },
  themeConfig: {
    profile: '/profile.png',
    disqus: 'icehoneyblog',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: '/archives/' },
      { text: 'Tags', link: '/tags/' },
      { text: 'Friends', link: '/friends/' },
      { text: 'About', link: '/about/' }
    ],
    footer: {
      contact: [
        { type: 'github', link: 'https://github.com/acgotaku' },
        { type: 'twitter', link: 'https://twitter.com/acgotaku311' }
      ],
      copyright: [
        { text: copyright, link: 'https://github.com/acgotaku/IceHoney-BLOG' }
      ]
    }
  },
  vite: {
    plugins: [
      {
        name: 'icehoney:watch-posts',
        apply: 'serve',
        configureServer(server) {
          // One save can fire several events, refresh once they settle
          let timer: ReturnType<typeof setTimeout> | undefined;
          const onPostChange = (file: string) => {
            if (!file.startsWith(postsDir) || !file.endsWith('.md')) return;
            clearTimeout(timer);
            timer = setTimeout(() => {
              refreshDynamicRoutes(server).catch(err =>
                server.config.logger.error(String(err))
              );
            }, 100);
          };
          server.watcher
            .on('add', onPostChange)
            .on('change', onPostChange)
            .on('unlink', onPostChange);
        }
      }
    ]
  },
  async buildEnd({ outDir }) {
    const feed = new Feed({
      title,
      description,
      id: hostname,
      link: hostname,
      language: 'zh-CN',
      favicon: hostname + 'favicon.png',
      copyright,
      feedLinks: Object.fromEntries(
        Object.entries(feeds).map(([key, { file }]) => [key, hostname + file])
      )
    });
    for (const post of getPosts()) {
      const link = hostname + post.url.slice(1);
      feed.addItem({
        title: post.title,
        id: link,
        link,
        date: new Date(post.time),
        description: await getExcerpt(post)
      });
    }
    fs.writeFileSync(path.join(outDir, feeds.rss.file), feed.rss2());
    fs.writeFileSync(path.join(outDir, feeds.atom.file), feed.atom1());
    fs.writeFileSync(path.join(outDir, feeds.json.file), feed.json1());
  }
});
