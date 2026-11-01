import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://t73liu.github.io",
  integrations: [mdx(), sitemap(), robotsTxt(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
