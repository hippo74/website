// const path = require('path')
// const { slugify } = require('./src/helpers')

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   // block out content/pages since they have different frontmatter
//   if (node.internal.type === 'Mdx' && !node.fileAbsolutePath.includes('content/pages/')) {
//     const directory = node.fileAbsolutePath.match(/([^/]+)\/[^/]+$/)[1]
//     const url = slugify(node.frontmatter.title)
//     const slug = `${directory}/${url}`
//     const template = directory

//     createNodeField({
//       node,
//       name: 'id',
//       value: node.id
//     })

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })

//     createNodeField({
//       node,
//       name: 'template',
//       value: template
//     })
//   }
// }

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     {
//       allMdx(
//         sort: { order: DESC, fields: [frontmatter___meta___date] }
//         limit: 1000
//         filter: { fileAbsolutePath: { regex: "/^((?!/pages/).)*$/" } } 
//       ) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//               template
//             }
//           }
//         }
//       }
//     }
//   `)
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild('Error while running GraphQL query.')
//     return
//   }
//   result.data.allMdx.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/${node.fields.template}.js`),
//       context: {
//         id: node.fields.id,
//         slug: node.fields.slug,
//         template: node.fields.template
//       }
//     })
//   })
// }
