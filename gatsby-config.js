const config = require('./config/site')

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,
    siteUrl: config.site.siteUrl, // No trailing slash
    twitterHandle: config.site.twitterHandle,
    image: config.site.image,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.site.title,
        short_name: config.manifest.shortName,
        start_url: '/',
        background_color: config.manifest.bgColor,
        theme_color: config.manifest.themeColor,
        display: 'minimal-ui',
        icon: `src/images/${config.manifest.icon}`, // This path is relative to the root of the site
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.google.analytics.trackingId,
        head: true, // Put tracking script in the head
        respectDNT: true, // Respect users who have enabled Do Not Track
      },
    },
    'gatsby-plugin-sitemap',
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
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        // The plugin order matters
        postCssPlugins: [
          require('postcss-import'),
          require('stylelint')({
            rules: {
              'at-rule-no-unknown': [
                true,
                {
                  ignoreAtRules: ['screen'],
                },
              ],
            },
          }),
          require('tailwindcss')('./tailwind.config.js'),
          require('postcss-extend-rule'),
          require('postcss-advanced-variables'),
          require('postcss-preset-env'), // Defaults to Stage 2
          require('postcss-atroot'),
          require('postcss-property-lookup'),
          require('postcss-nested'),
          require('autoprefixer')(),
          require('postcss-reporter')({ clearReportedMessages: true }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: { printRejected: true, tailwind: true },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: { layout: false },
    },
    // 'gatsby-plugin-offline', // Use with care
  ],
}
