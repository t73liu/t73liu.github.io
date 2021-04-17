import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/blog";
import Layout from "../components/layout";

const BlogPage = (props) => (
  <Layout>
    <Blog {...props} />
  </Layout>
);

export const query = graphql`
  query {
    tags: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//posts//" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//posts//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        frontmatter {
          title
          date
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogPage;
