import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import ExternalLink from "../components/external-link";

export default ({ data }) => {
  const { title, source, demo, tags } = data.markdownRemark.frontmatter;
  return (
    <Fragment>
      <SEO title={title} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        {(demo || source) && (
          <nav className="level box">
            {source && (
              <p className="level-item has-text-centered">
                <ExternalLink url={source}>
                  <strong>Code</strong>
                </ExternalLink>
              </p>
            )}
            {demo && (
              <p className="level-item has-text-centered">
                <ExternalLink url={demo}>
                  <strong>Demo</strong>
                </ExternalLink>
              </p>
            )}
          </nav>
        )}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="hero-foot tags are-large">
          {tags.map(tag => (
            <span key={tag} className="tag">
              <Link to={`/projects/tags/${tag}`}>{tag}</Link>
            </span>
          ))}
        </div>
      </div>
    </Fragment>
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
