import React from "react";
import { Link } from "gatsby";

export default ({
  fields: { slug },
  frontmatter: { title, date },
  excerpt,
  timeToRead,
}) => (
  <div className="card">
    <header className="card-header no-box-shadow">
      <div className="card-header-content">
        <p className="title is-size-3">
          <Link to={slug}>{title}</Link>
        </p>
        <p className="subtitle is-size-6">
          <small>
            {date} • {timeToRead} min read
          </small>
        </p>
      </div>
    </header>
    <div className="card-content">
      <div className="content">{excerpt}</div>
    </div>
  </div>
);
