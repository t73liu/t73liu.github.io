import { graphql } from "gatsby";
import Projects from "../components/projects";

export default Projects;

export const query = graphql`
  query {
    tags: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//projects//" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//projects//" } } }
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
              fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
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
