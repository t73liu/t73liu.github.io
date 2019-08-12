import React from "react";
import { Link } from "gatsby";

export default ({ baseUrl = "", tags, tag }) => (
  <div className="card">
    <header className="card-header no-box-shadow">
      <div className="card-header-content">
        <p className="title is-size-3">Tags</p>
      </div>
    </header>
    <div className="card-content">
      <div className="tags are-medium">
        {tags.group.map(({ fieldValue, totalCount }) => (
          <span
            key={fieldValue}
            className={fieldValue === tag ? "tag is-dark" : "tag"}
          >
            <Link
              to={
                fieldValue === tag ? baseUrl : `${baseUrl}/tags/${fieldValue}/`
              }
            >
              {fieldValue} ({totalCount})
            </Link>
          </span>
        ))}
      </div>
    </div>
  </div>
);
