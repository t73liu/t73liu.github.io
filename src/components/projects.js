import React, { Fragment } from "react";
import { chunk } from "lodash";
import Seo from "./seo";
import ProjectPreview from "./project-preview";
import Tags from "./tags";

const Projects = ({ data: { tags, projects }, pageContext: { tag } }) => {
  return (
    <Fragment>
      <Seo title={tag ? `Projects | ${tag}` : "Projects"} />
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
                {row.map((node) => (
                  <div key={node.id} className="tile is-parent is-4">
                    <ProjectPreview {...node} />
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

export default Projects;
