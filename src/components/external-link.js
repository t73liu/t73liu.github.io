import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ExternalLink = ({ url = "", children, className }) => (
  <OutboundLink
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    className={className}
  >
    {children}
  </OutboundLink>
);

export default ExternalLink;
