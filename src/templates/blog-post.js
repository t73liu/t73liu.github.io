import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
  const { title, date, tags } = data.markdownRemark.frontmatter;
  return (
    <Fragment>
      <SEO title={title} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{date}</h2>
          </div>
        </div>
      </section>
      <div className="padded-container">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="hero-foot tags are-large">
          {tags.map(tag => (
            <span key={tag} className="tag">
              <Link to={`/blog/tags/${tag}`}>{tag}</Link>
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
        date
        tags
      }
    }
  }
`;
