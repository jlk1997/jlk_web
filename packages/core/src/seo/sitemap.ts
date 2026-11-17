export function serializeSitemap(item: { url: string; lastmod?: string; changefreq?: string; priority?: number }) {
  const path = new URL(item.url).pathname.replace(/\/$/, "") || "/";
  item.lastmod = "2026-10-22";
  const top = new Set([
    "/",
    "/en",
    "/services",
    "/en/services",
    "/ecommerce",
    "/en/ecommerce",
    "/ai-commerce",
    "/en/ai-commerce",
    "/custom",
    "/en/custom",
    "/cases",
    "/en/cases",
    "/about",
    "/en/about",
    "/geo",
    "/en/geo",
    "/ask",
    "/en/ask",
    "/faq",
    "/en/faq",
    "/faq/mini-program-shop-yearly-price",
    "/en/faq/mini-program-shop-yearly-price",
    "/faq/mini-program-shop-vs-custom",
    "/en/faq/mini-program-shop-vs-custom",
    "/faq/mini-program-ai-guide",
    "/en/faq/mini-program-ai-guide",
    "/faq/shanghai-yearly-mini-program-shop",
    "/en/faq/shanghai-yearly-mini-program-shop",
    "/faq/what-is-yisuan-ecommerce",
    "/en/faq/what-is-yisuan-ecommerce",
  ]);
  const mid = path.includes("/solutions/");
  item.priority = top.has(path) ? 1 : path.includes("/ask/") || path.includes("/faq/") || path.includes("/writing/") || mid ? 0.72 : 0.6;
  item.changefreq = path === "/now" || path === "/en/now" ? "weekly" : "monthly";
  return item;
}
