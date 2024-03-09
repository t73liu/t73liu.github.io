import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://t73liu.github.io",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    robotsTxt(),
    // TODO: Confirm this is required.
    // https://docs.astro.build/en/guides/integrations-guide/partytown/#configforward
    // config: {
    //   forward: ["dataLayer.push"],
    // },
    partytown(),
    tailwind(),
  ],
});
