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
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Hello Tag' },
            scopeLayout: 'Layout',
            pagination: {
              lengthPerPage: 3
            }
          }
        ]
      }
    ]
  ]
};
