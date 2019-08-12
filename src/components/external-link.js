import React from "react";

export default ({ url = "", children }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);
