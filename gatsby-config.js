/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const { round } = require("lodash");

module.exports = {
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-external-links",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1300,
              wrapperStyle: (fluidResult) =>
                `flex:${round(fluidResult.aspectRatio, 2)};`,
            },
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    "gatsby-plugin-lodash",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true, // Print removed selectors and processed file names
        ignore: ["prismjs/", "src/"], // Ignore files/folders
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-148826232-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tao",
        short_name: "Tao",
        start_url: "/",
        background_color: "#CDC449",
        theme_color: "#CDC449",
        display: "standalone",
        icon: "content/images/icon.png",
      },
    },
    // "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-offline",
  ],
  siteMetadata: {
    title: "Tao",
    description: "Personal blog and projects.",
    author: "@t73liu",
    siteUrl: "https://t73liu.github.io",
  },
};
