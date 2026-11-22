import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://manyer.dev",
  // Emit `software.html` rather than `software/index.html`, so Cloudflare
  // serves pages at their canonical, slash-less URLs without a redirect.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [preact()],
  vite: { plugins: [tailwindcss()] },
});
