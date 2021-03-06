import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ExternalLink from "../components/external-link";
import BlogPreview from "../components/blog-preview";
import ProjectPreview from "../components/project-preview";

const Home = ({ data: { posts, projects, profileImage } }) => (
  <Layout>
    <Seo title="Home" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome</h1>
        </div>
      </div>
    </section>
    <div className="padded-container">
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <GatsbyImage
                image={profileImage.childImageSharp.gatsbyImageData}
                alt="Profile"
              />
            </div>
            <div className="card-content">
              <p className="title is-4">Tao Liu</p>
              <p className="subtitle is-6">
                <ExternalLink
                  url="https://github.com/t73liu"
                  className="has-text-weight-semibold"
                >
                  @t73liu
                </ExternalLink>
              </p>
              <div className="content">
                Software engineer looking for interesting problems
                <ul>
                  <li>Clojure</li>
                  <li>Go</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <ExternalLink url="https://www.linkedin.com/in/t73liu">
                  LinkedIn
                </ExternalLink>
              </div>
              <div className="card-footer-item">
                <ExternalLink url="https://github.com/t73liu">
                  GitHub
                </ExternalLink>
              </div>
            </footer>
          </div>
        </div>
        <div className="column">
          <div>
            <div className="title">Recent Posts</div>
            {posts.nodes.map((node) => (
              <div key={node.id} className="tile is-parent">
                <article className="tile is-child">
                  <BlogPreview {...node} />
                </article>
              </div>
            ))}
          </div>
          <div>
            <p className="title">Recent Projects</p>
            <div className="tile is-ancestor">
              {projects.nodes.map((node) => (
                <div key={node.id} className="tile is-4 is-parent">
                  <ProjectPreview {...node} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 3
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
    projects: allMarkdownRemark(
      limit: 3
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
    profileImage: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 500
          height: 500
          quality: 100
          transformOptions: { fit: COVER, cropFocus: ENTROPY }
        )
      }
    }
  }
`;

export default Home;
