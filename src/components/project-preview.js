import React from "react";
import { Link } from "gatsby";
import ExternalLink from "./external-link"; // import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectPreview = ({
  fields: { slug },
  frontmatter: { title, description, source, demo, image },
}) => (
  <div className="tile is-child card">
    {image && (
      <div className="card-image">
        <Link to={slug}>
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </Link>
      </div>
    )}
    <header className="card-header no-box-shadow">
      <div className="card-header-content">
        <p className="title is-size-3">
          <Link to={slug}>{title}</Link>
        </p>
      </div>
    </header>
    <div className="card-content">
      <div className="content">{description}</div>
    </div>
    <footer className="card-footer">
      {source && (
        <div className="card-footer-item">
          <ExternalLink url={source}>Code</ExternalLink>
        </div>
      )}
      {demo && (
        <div className="card-footer-item">
          <ExternalLink url={demo}>Demo</ExternalLink>
        </div>
      )}
    </footer>
  </div>
);

export default ProjectPreview;
