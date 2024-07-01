import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://t73liu.github.io",
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt(),
    // TODO: Confirm this is required.
    // https://docs.astro.build/en/guides/integrations-guide/partytown/#configforward
    // config: {
    //   forward: ["dataLayer.push"],
    // },
    partytown(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
