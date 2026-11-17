import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { serializeSitemap } from "@jlk/core/seo/sitemap";

export default defineConfig({
  site: "https://yisuan.genvidtrade.cn",
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
      filter: (page) => !page.includes("/og/") && !page.includes("/products/store"),
      serialize: serializeSitemap,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["@jlk/core"],
    },
  },
});
