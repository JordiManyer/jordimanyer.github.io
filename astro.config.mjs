import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://manyer.dev",
  // Emit `software.html` rather than `software/index.html`, so Cloudflare
  // serves pages at their canonical, slash-less URLs without a redirect.
  // Styles are inlined into each page so that a page can never be painted
  // before its stylesheet has arrived.
  build: { format: "file", inlineStylesheets: "always" },
  trailingSlash: "never",
  integrations: [preact()],
  vite: { plugins: [tailwindcss()] },
});
