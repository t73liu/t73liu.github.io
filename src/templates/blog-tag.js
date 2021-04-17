import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/blog";
import Layout from "../components/layout";

const BlogTagPage = (props) => (
  <Layout>
    <Blog {...props} />
  </Layout>
);

export const query = graphql`
  query($tag: [String]) {
    tags: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//posts//" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "//posts//" } }
        frontmatter: { tags: { in: $tag } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        frontmatter {
          tags
          date
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogTagPage;
