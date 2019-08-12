import { graphql } from "gatsby";
import Projects from "../components/projects";

export default Projects;

export const query = graphql`
  query($tag: [String]) {
    tags: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//projects//" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "//projects//" } }
        frontmatter: { tags: { in: $tag } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          description
          tags
          source
          demo
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
