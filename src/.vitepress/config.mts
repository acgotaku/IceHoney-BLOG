import fs from 'node:fs';
import path from 'node:path';
import { Feed } from 'feed';
import { defineConfigWithTheme } from 'vitepress';
import { getExcerpt, getPosts, hostname, markdown } from './posts';
import type { ThemeConfig } from './theme/types';

const title = 'IceHoney';
const description = 'IceHoney是雪月秋水君的博客~ 记录秋水君生活的点点滴滴~';
const copyright = '2013 - 2023 © Ice Honey';
const feeds = {
  rss: { file: 'rss.xml', type: 'application/rss+xml', name: 'RSS' },
  atom: { file: 'feed.atom', type: 'application/atom+xml', name: 'Atom' },
  json: { file: 'feed.json', type: 'application/json', name: 'JSON' }
};

const posts = getPosts();
const postPages = new Map(
  posts.map(post => [post.file, decodeURI(post.url).slice(1) + 'index.md'])
);

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
  // Keep the VuePress URLs: posts/:date-:slug/, and every page as a directory
  rewrites(page) {
    const post = postPages.get(page);
    if (post) return post;
    if (page === 'page/1.md') return 'index.md';
    if (!page.endsWith('index.md')) return page.replace(/\.md$/, '/index.md');
    return page;
  },
  transformPageData(pageData) {
    if (pageData.params?.title) {
      pageData.title = pageData.params.title;
    }
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
    for (const post of posts) {
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
