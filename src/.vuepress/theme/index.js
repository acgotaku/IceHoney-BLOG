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
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 2
            }
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tags/',
            layout: 'Tag',
            frontmatter: { title: 'Hello Tag' },
            scopeLayout: 'Layout',
            pagination: {
              lengthPerPage: 3
            }
          }
        ]
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
