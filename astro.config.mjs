import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import preprocess from "svelte-preprocess";

export default defineConfig({
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
