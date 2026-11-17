import type { APIRoute } from "astro";
import { findOg, meOgPages } from "@jlk/core/og/pages";
import { renderOg } from "@jlk/core/og/render";
import type { Locale } from "@jlk/core/data/facts";

export function getStaticPaths() {
  const locales: Locale[] = ["zh", "en"];
  return locales.flatMap((locale) => meOgPages.map((page) => ({ params: { locale, slug: page.slug } })));
}

export const GET: APIRoute = async ({ params }) => {
  const locale = (params.locale === "en" ? "en" : "zh") as Locale;
  const page = findOg(meOgPages, params.slug ?? "home") ?? meOgPages[0];
  const png = await renderOg(page, locale, locale === "zh" ? "genvidtrade.cn" : "Likai Jiang");
  return new Response(Buffer.from(png), { headers: { "Content-Type": "image/png" } });
};
