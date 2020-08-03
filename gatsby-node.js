const path = require("path")

exports.createPages = async ({ actions }) => {
  const locales = ["en", "es"]

  locales.forEach(locale => {
    actions.createPage({
      path: locale === "en" ? "/" : locale,
      component: path.resolve(`./src/templates/home.tsx`),
      context: {
        locale,
      },
    })
  })
}
