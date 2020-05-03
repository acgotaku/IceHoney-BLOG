module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: 'posts',
            path: '/',
            itemPermalink: '/posts/:year-:month-:day-:slug',
            title: 'Home',
            pagination: {
              lengthPerPage: 3
            }
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tags/',
            frontmatter: { title: 'Tags' },
            layout: 'Tags',
            scopeLayout: 'Tag',
            pagination: {
              lengthPerPage: 3
            }
          },
          {
            id: 'archive',
            keys: ['archives'],
            path: '/archives/',
            frontmatter: { title: 'Archives' },
            layout: 'Archives',
            scopeLayout: 'Archive'
          }
        ],
        sitemap: {
          hostname: 'https://blog.icehoney.me/'
        },
        comment: {
          service: 'disqus',
          shortname: 'icehoneyblog'
        }
      }
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        }
      }
    ]
  ]
};
