exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const { data } = await graphql(`
      {
        allCompareJson {
          edges {
            node {
              id
              title
              slug
              keyboard1
              keyboard2
            }
          }
        }
      }
    `);
    data.allCompareJson.edges.forEach((edge) => {
      const compare = edge.node;
      createPage({
        path: `/compare/${compare.slug}`,
        component: require.resolve('./src/components/compare.js'),
        context: {
          data: edge.node,
        },
      });
    });
  } catch (err) {
    console.log(err);
  }
}