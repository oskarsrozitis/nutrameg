import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), relativeLinks()],
  output: 'static',
  compressHTML: false,
  base: '/',
  // Set the correct base URL for your assets
  publicDir: "public",
  // Ensure this points to your public directory
  srcDir: "src",
  // Ensure this points to your source directory
  outDir: "./dist",
  // Ensure this points to your output directory
  build: {
    assets: 'images',
    // You can customize this if needed
    assetsPrefix: ''
  }
});