/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage.includes('develop')) {
    actions.setWebpackConfig({
      devtool: 'cheap-module-source-map',
    })
    return true
  }
}
