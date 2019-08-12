import React, { Fragment } from "react";
import SEO from "./seo";
import BlogPreview from "./blog-preview";
import Tags from "./tags";

export default ({ data: { tags, posts }, pageContext: { tag } }) => {
  return (
    <Fragment>
      <SEO title={tag ? `Blog | ${tag}` : "Blog"} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Blog</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="tile is-ancestor is-vertical">
              {posts.nodes.map(node => (
                <div key={node.id} className="tile is-parent">
                  <article className="tile is-child">
                    <BlogPreview {...node} />
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="column">
            <article className="tile is-child">
              <Tags tags={tags} tag={tag} baseUrl="/blog" />
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
