import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFound = () => (
  <Layout>
    <Seo title="Not Found" />
    <section className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Not Found ...</h1>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
