/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({node, getNode,basePath: `pages`})
    createNodeField({node, name:`slug`,value: slug})
  }
}

export.createPages = async({graphql,actions}) => {
  const {createPAge} = actions
  const result = await graphql(`
    query {
      allMdx{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMdx.edges.forEach(({node}) => {
        createPage({
          path:node.fields.slug,
          component:path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug:node.fields.slug,
          }
        })
    })
      
}
