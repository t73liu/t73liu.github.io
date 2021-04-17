import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ExternalLink from "../components/external-link";

const ProjectPage = ({ data }) => {
  const { title, source, demo, tags } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Seo title={title} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        {(demo || source) && (
          <nav className="level">
            {source && (
              <ExternalLink
                url={source}
                className="button level-item has-text-centered"
              >
                <strong>Code</strong>
              </ExternalLink>
            )}
            {demo && (
              <ExternalLink
                url={demo}
                className="button level-item has-text-centered"
              >
                <strong>Demo</strong>
              </ExternalLink>
            )}
          </nav>
        )}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="hero-foot content">
          <h2>Tags</h2>
          <div className="tags are-medium">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                <Link to={`/projects/tags/${tag}`}>{tag}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        source
        demo
        tags
      }
    }
  }
`;

export default ProjectPage;
