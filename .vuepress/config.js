module.exports = {
  title: "水の滴るよう",
  description: 'Breathtakingly beautiful',
  config: (md) => {
    md.options.linkify = true
  },
  port: '8080',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: "Top", link: '/' },
      {
        text: "Contact",
        items: [
          { text: "Twitter", link: "https://www.twitter.com/momeemt" },
        ]
      }
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}
