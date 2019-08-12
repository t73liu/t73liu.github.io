import React from "react";

export default ({ url = "", children, className }) => (
  <a href={url} rel="noopener noreferrer" target="_blank" className={className}>
    {children}
  </a>
);
