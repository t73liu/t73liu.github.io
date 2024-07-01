import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Tao",
  DESCRIPTION: "Personal blog and projects.",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal blog and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of blog posts.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/t73liu",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/t73liu",
  },
];
