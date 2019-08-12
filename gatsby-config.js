/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const { round } = require("lodash");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout.js"),
      },
    },
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
              maxWidth: 800,
              wrapperStyle: fluidResult =>
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Engineer Starter",
        short_name: "Gatsby Engineer Starter",
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
  },
};
