const _ = require('lodash')

const wrapper = promise =>
    promise.then(result => {
        if (result.errors) {
            throw result.errors
        }
        return result
    })

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const categoryTemplate = require.resolve('./src/templates/category.js')

    const result = await wrapper(
        graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              categories
            }
          }
        }
      }
    `)
    )

    const posts = result.data.allMdx.nodes

    const categorySet = new Set()

    _.each(posts, n => {
        if (_.get(n, 'frontmatter.categories')) {
            n.frontmatter.categories.forEach(cat => {
                categorySet.add(cat)
            })
        }
    })

    const categories = Array.from(categorySet)

    categories.forEach(category => {
        createPage({
            path: `/categories/${_.kebabCase(category)}`,
            component: categoryTemplate,
            context: {
                category,
            },
        })
    })
}
