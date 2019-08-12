import { graphql } from "gatsby";
import Blog from "../components/blog";

export default Blog;

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
