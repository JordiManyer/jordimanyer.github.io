import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The app is defined in app.ts; main.ts is the runtime entrypoint that
  // serves the built app.
  plugins: [fresh({ serverEntry: "app.ts" }), tailwindcss()],
});
