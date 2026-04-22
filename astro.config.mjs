import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://myatlas.fit",
  output: "static",
  build: {
    assets: "_assets",
  },
});
