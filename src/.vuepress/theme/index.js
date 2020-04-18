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
            layout: 'Tags',
            frontmatter: { title: 'Tags' },
            scopeLayout: 'Tag',
            pagination: {
              lengthPerPage: 3
            }
          }
        ],
        comment: {
          service: 'disqus',
          shortname: 'icehoneyblog',
          url: 'https://blog.icehoney.me/'
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
