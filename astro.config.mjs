import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Noindex / utility pages kept out of the sitemap.
const EXCLUDED = ["/open", "/invite", "/apply", "/reset-password"];

export default defineConfig({
  site: "https://myatlas.fit",
  output: "static",
  build: {
    assets: "_assets",
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "");
        return !EXCLUDED.includes(path);
      },
    }),
  ],
});
