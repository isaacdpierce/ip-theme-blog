const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      //
      name: "slug",

      node,

      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,

      component: path.resolve(`./src/components/layout/posts-page-layout.js`),

      context: { id: node.id },
    })
  })
  const projectData = [
    {
      name: "Beatscape",
      slug: "beatscape",
      description: "Animated soundscapes.",
    },
    {
      name: "Berryman",
      slug: "berryman",
      description: "Shopify E-commerce solution.",
    },
  ]
  projectData.forEach(project => {
    createPage({
      path: `/${project.slug}`,
      component: require.resolve(`./src/components/layout/project-page.js`),
      context: { project },
    })
  })
}
