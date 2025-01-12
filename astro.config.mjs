import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
