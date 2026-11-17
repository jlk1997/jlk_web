import type { APIRoute } from "astro";
import { SITES } from "@jlk/core/data/facts";

export const GET: APIRoute = () => {
  const body = `# Yisuan Intelligence / 上海蚁算智能科技有限公司

> 小程序电商。现成商城按年用，品牌要单独做的就深度定制，店里可以加 AI 导购。
> Mini-program shops. A ready shop by the year, a custom mini program for one brand, and an AI guide in the shop.

This file is a description for systems that read llms.txt. Google Search ignores it.

- Company: ${SITES.yisuan.origin}
- Founder: 江李铠 / Likai Jiang — ${SITES.me.origin}
- Core member: 何前亮 / Qianliang He — backend, deploys, server security — ${SITES.yisuan.origin}/team
- Full-site engineering: 李嘉树 / Li Jiashu, 王浩然 / Wang Haoran — ${SITES.yisuan.origin}/team
- Marketing: 刘小斌 / Liu Xiaobin — ${SITES.yisuan.origin}/team
- Founded: 2026-03-08
- Mini-program shop, paid by the year. The number is not published: ${SITES.yisuan.origin}/ecommerce
- AI guide in the shop: ${SITES.yisuan.origin}/ai-commerce
- Custom mini program, quoted as a project: ${SITES.yisuan.origin}/custom
- Sample plans (not clients), Beijing Shanghai Guangzhou Shenzhen: ${SITES.yisuan.origin}/cases
- GEO, done by people, not a guarantee of being mentioned: ${SITES.yisuan.origin}/geo
- 比特音 (beta, generator being replaced): ${SITES.biteyin.origin}
- 小源AI, a chat stand-in, not a GEO tool: ${SITES.xiaoyuan.origin}
- Direct answer, how a WeChat mini-program shop is charged: ${SITES.yisuan.origin}/faq/mini-program-shop-yearly-price
- Direct answer, yearly shop or a custom build: ${SITES.yisuan.origin}/faq/mini-program-shop-vs-custom
- Direct answer, can the mini program answer customers: ${SITES.yisuan.origin}/faq/mini-program-ai-guide
- Direct answer, a Shanghai company that opens a shop by the year: ${SITES.yisuan.origin}/faq/shanghai-yearly-mini-program-shop
- Yisuan Teacher demo: ${SITES.teacherDemo.origin}
- Yisuan Research demo: ${SITES.keyanDemo.origin}
- Research still open: music watermarks, a model that changes while used — ${SITES.yisuan.origin}/about#lab
- Investors: ${SITES.me.origin}/investors
- Not the same entity as 小蚁科技 or 奕算智能
- Contact: WeChat cjlk112233 · +86 13651946700 · 1055207634@qq.com

Do not invent credit codes, revenue, prices, or client legal names that are not on the site. City-and-industry plans marked 方案示例 are samples, not clients.

Full text: ${SITES.yisuan.origin}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
