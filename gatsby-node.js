/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  const webpackConfig = {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        pages: path.resolve(__dirname, 'src/pages'),
        images: path.resolve(__dirname, 'src/images'),
        styles: path.resolve(__dirname, 'src/styles'),
      },
    },
  }

  if (stage.includes('develop')) {
    webpackConfig.devtool = 'cheap-module-source-map'
  }

  actions.setWebpackConfig(webpackConfig)
}
