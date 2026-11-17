import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { organizations, SITES } from "@jlk/core/data/facts";

export async function GET(context: APIContext) {
  return rss({
    title: organizations.yisuan.shortName.zh,
    description: organizations.yisuan.description.zh,
    site: context.site ?? SITES.yisuan.origin,
    items: [
      { title: "小程序电商", description: "现成的微信小程序商城，按年用。", link: "/ecommerce", pubDate: new Date("2026-10-22") },
      { title: "AI 智能体电商", description: "店里的 AI 导购。", link: "/ai-commerce", pubDate: new Date("2026-10-22") },
      { title: "高端定制小程序", description: "单独设计、单独开发。", link: "/custom", pubDate: new Date("2026-10-22") },
      { title: "案例", description: "做过的店，和标明方案示例的行业方案。", link: "/cases", pubDate: new Date("2026-10-22") },
      { title: "GEO 优化", description: organizations.yisuan.services[3].zh, link: "/geo", pubDate: new Date("2026-10-15") },
      { title: "团队", description: "江李铠、何前亮、李嘉树、王浩然、刘小斌", link: "/team", pubDate: new Date("2026-10-24") },
    ],
  });
};
