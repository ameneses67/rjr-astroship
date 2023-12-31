import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://retirate-joven-y-rico.pages.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    assets: true,
  },
});
