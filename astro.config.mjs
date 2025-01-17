import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astronaut.github.io",
  base: "my-repo",
  integrations: [tailwind()],
  env: {
    schema: {
      WORDPRESS_URL: envField.string({ context: "server", access: "public" }),
      WORDPRESS_URL_MEDIA: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
