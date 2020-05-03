module.exports = {
  title: 'IceHoney',
  description: 'IceHoney是雪月秋水君的博客~ 记录秋水君生活的点点滴滴~',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#8191f1' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-37774652-3'
      }
    ]
  ],
  themeConfig: {
    profile: '/profile.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Archives', link: '/archives/' },
      { text: 'Tags', link: '/tags/' },
      { text: 'Friends', link: '/friends/' },
      { text: 'About', link: '/about/' }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/acgotaku'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/acgotaku311'
        }
      ],
      copyright: [
        {
          text: '2013 - 2020 © Ice Honey',
          link: 'https://github.com/acgotaku/IceHoney-BLOG'
        }
      ]
    }
  }
};
