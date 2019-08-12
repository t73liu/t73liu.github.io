import React, { Fragment } from "react";
import SEO from "../components/seo";

export default () => (
  <Fragment>
    <SEO title="Not Found" />
    <section className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Not Found ...</h1>
        </div>
      </div>
    </section>
  </Fragment>
);
