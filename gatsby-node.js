const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/BlogPost__Page.js');

  return graphql(`
    {
      allMdx {
        edges {
          node {
            html
            id
            timeToRead
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });
  });
};
