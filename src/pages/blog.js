import { graphql } from "gatsby";
import Blog from "../components/blog";

export default Blog;

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
