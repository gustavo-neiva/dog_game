import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import preprocess from "svelte-preprocess";

export default defineConfig({
  resolve: {
    alias: [{ find: "@components", replacement: "/src" }],
  },
  integrations: [
    svelte({
      preprocess: [
        preprocess({
          postcss: true,
        }),
      ],
    }),
  ],
});
