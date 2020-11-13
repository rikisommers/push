const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  const query = `{
    projects:allDatoCmsProject {
      edges {
        node {
          title
          slug
          description
        }
        next {
          slug
        }
      }
    }
  }`;

  const result = await graphql(query);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const projects = result.data.projects.edges;

  const createProjectPage = project => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/projects/${project.node.slug}`,
      component: projectTemplate,
      context: {
        nextSlug: next.slug,
        ...project.node
      }
    });
  };

  projects.forEach(createProjectPage);
};


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
          {
            test: /react-animated-cursor/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}