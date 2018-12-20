module.exports = {
  site: {
    name: 'Batch Development Limited',
    url: 'https://gatsby-starter-batch.netlify.com', // No trailing slash
    title: "Batch's Gatsby Starter",
    description: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
    keywords:
      'Batch, development, web design, web development, mobile design, digital marketing, email champion, ecommerce, e-commerce, e commerce, progressive website, single page application, application, vuejs, vue, react, reactjs, gatsby, fast, pwa, spa, christchurch, new zealand, south island',
  },
  manifest: {
    shortName: 'Batch Starter', // homescreen (PWA). under 12 characters.
    themeColor: '#ff006a', // progress theme colors
    bgColor: '#ff006a',
    icon: 'src/images/gatsby-icon.png',
  },
  twitterHandle: 'batchnz',
  prismic: {
    repository: 'gatsby-starter-batch',
  },
  google: {
    analytics: {
      trackingId: '',
    },
  },
}
