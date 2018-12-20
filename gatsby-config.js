const config = require('./data/site-config')

module.exports = {
  siteMetadata: {
    title: config.site.title,
    siteUrl: config.site.url, // No trailing slash
  },
  plugins: [
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.site.title,
        short_name: config.manifest.shortName,
        start_url: '/',
        background_color: config.manifest.bgColor,
        theme_color: config.manifest.themeColor,
        display: 'minimal-ui',
        icon: config.manifest.icon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.google.analytics.trackingId,
        head: true, // Put tracking script in the head
        respectDNT: true, // Respect users who have enabled Do Not Track
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    'gatsby-plugin-lodash',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('precss'),
          require('stylelint'),
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer')(),
          require('postcss-reporter')({ clearReportedMessages: true }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: { layout: false },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
  ],
}
