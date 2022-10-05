import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    files: {
      lib: "src/libraries",
      assets: "src/assets"
    },
    alias: {
      "@components/*": "src/libraries/components/*",
      "@icons/*": "src/libraries/icons/*"
    }
  }
};

export default config;