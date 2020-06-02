const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allEducationJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allEducationJson.edges.forEach(elemnt => {
    const { node } = elemnt
    actions.createPage({
      path: node.slug,
      component: path.resolve("./src/components/Template.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}
