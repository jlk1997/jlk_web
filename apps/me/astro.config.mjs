import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { serializeSitemap } from "@jlk/core/seo/sitemap";

export default defineConfig({
  site: "https://genvidtrade.cn",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh",
        locales: {
          zh: "zh-CN",
          en: "en",
        },
      },
      filter: (page) => !page.includes("/go/") && !page.includes("/og/"),
      serialize: serializeSitemap,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["@jlk/core"],
    },
  },
});
