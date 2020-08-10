const path = require("path")

const blogPosts = `
    query {
      allDatoCmsPost {
        edges {
          node {
            id: originalId
            title
            locale
            slug
          }
        }
      }
    }
  `

exports.createPages = async ({ actions, graphql, reporter }) => {
  const locales = ["en", "es"]
  const { createPage } = actions
  locales.forEach(locale => {
    createPage({
      path: locale === "en" ? "/" : locale,
      component: path.resolve(`./src/templates/home.tsx`),
      context: {
        locale,
      },
    })
  })

  const results = await graphql(blogPosts)

  if (results.errors) {
    reporter.panic("error x.x")
  }
  results.data.allDatoCmsPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/posts.tsx`),
      context: {
        PostID: node.id,
        Locale: node.locale,
      },
    })
  })
}
