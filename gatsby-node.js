/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Data: `${__dirname}/data/config`,
        Components: `${__dirname}/src/components/`,
        Common: `${__dirname}/src/common/`,
        Static: `${__dirname}/static/`
      },
    },
  })
}
