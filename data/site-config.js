module.exports = {
  site: {
    name: "Batch's Gatsby Starter",
    url: 'https://gatsby-starter-batch.netlify.com', // No trailing slash
    title: "Batch's Gatsby Starter",
    description: 'A GatsbyJS stater with Advanced design in mind.', // Used in the meta description
    keywords:
      'Batch, development, web design, web development, mobile design, digital marketing, email champion, ecommerce, e-commerce, e commerce, progressive website, single page application, application, vuejs, vue, react, reactjs, gatsby, fast, pwa, spa, christchurch, new zealand, south island',
  },
  manifest: {
    shortName: 'Batch Starter', // Under 12 characters
    themeColor: '#ff006a',
    bgColor: '#ff006a',
    icon: 'gatsby-icon.png', // Relative to the folder `./src/images/`
  },
  siteImage: 'site-image.jpg', // Relative to the folder `./static/`
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
