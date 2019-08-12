import React, { Fragment } from "react";
import { chunk } from "lodash";
import SEO from "./seo";
import ProjectPreview from "./project-preview";
import Tags from "./tags";

export default ({ data: { tags, projects }, pageContext: { tag } }) => {
  return (
    <Fragment>
      <SEO title={tag ? `Projects | ${tag}` : "Projects"} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Projects</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        <div className="columns">
          <div className="column is-three-quarters">
            {chunk(projects.nodes, 3).map((row, index) => (
              <div key={index} className="tile is-ancestor">
                {row.map(node => (
                  <div key={node.id} className="tile is-parent is-4">
                    <article className="tile is-child">
                      <ProjectPreview {...node} />
                    </article>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="column">
            <article className="tile is-child">
              <Tags tags={tags} tag={tag} baseUrl="/projects" />
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
