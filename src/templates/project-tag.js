import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Projects from "../components/projects";

const ProjectTagPage = (props) => (
  <Layout>
    <Projects {...props} />
  </Layout>
);

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

export default ProjectTagPage;
