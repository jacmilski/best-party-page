exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;

    const result = await graphql(`
        query allRealizationsQuery {
            allDatoCmsRealization {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    result.data.allDatoCmsRealization.edges.map(({ node }) => {
        createPage({
            path: `/realizacja/${node.slug}`,
            component: require.resolve('./src/components/templates/realizationTemplate/realizationTemplate.js'),
            context: {
                realizationId: node.id,
            }
        });
    });
}
