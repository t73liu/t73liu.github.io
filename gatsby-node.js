const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      blogTags: allMarkdownRemark(
        filter: { fields: { slug: { regex: "//posts//" } } }
      ) {
        distinct(field: frontmatter___tags)
      }
      posts: allMarkdownRemark(
        filter: { fields: { slug: { regex: "//posts//" } } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
      projectTags: allMarkdownRemark(
        filter: { fields: { slug: { regex: "//projects//" } } }
      ) {
        distinct(field: frontmatter___tags)
      }
      projects: allMarkdownRemark(
        filter: { fields: { slug: { regex: "//projects//" } } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.blogTags.distinct.forEach((tag) => {
      createPage({
        path: `/blog/tags/${tag}/`,
        component: path.resolve("./src/templates/blog-tag.js"),
        context: {
          tag,
        },
      });
    });
    result.data.posts.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
        },
      });
    });
    result.data.projectTags.distinct.forEach((tag) => {
      createPage({
        path: `/projects/tags/${tag}/`,
        component: path.resolve("./src/templates/project-tag.js"),
        context: {
          tag,
        },
      });
    });
    result.data.projects.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/project.js"),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
