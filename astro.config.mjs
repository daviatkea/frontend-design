import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  experimental: {},
});
