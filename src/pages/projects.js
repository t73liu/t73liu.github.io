import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Projects from "../components/projects";

const ProjectsPage = (props) => (
  <Layout>
    <Projects {...props} />
  </Layout>
);

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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
                height: 500
                quality: 100
              )
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

export default ProjectsPage;
