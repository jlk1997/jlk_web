import type { APIRoute } from "astro";
import { person, SITES } from "@jlk/core/data/facts";

export const GET: APIRoute = () => {
  const body = `# Likai Jiang / 江李铠

> ${person.headline.en}
> ${person.headline.zh}

This file is a description for systems that read llms.txt. Google Search ignores it.

- Personal site: ${SITES.me.origin}
- English name: Likai Jiang (papers also: Jiang Likai)
- English pages: ${SITES.me.origin}/en
- PhD (in progress): University of Shanghai for Science and Technology, MICS Lab. Field: AI security, watermarks for music-generation models
- Company: ${SITES.yisuan.origin} (上海蚁算智能科技有限公司, founded 2026-03-08). Mini-program shops, an AI guide, and custom mini programs. Prices are not published.
- Yisuan Ecommerce: ${SITES.yisuan.origin}/ecommerce
- Studio: ${SITES.me.origin}/ventures/weichong (上海市杨浦区殷行街道微宠时光软件工作室, 2025-04-29)
- 小源AI / Sourced, a chat stand-in: ${SITES.xiaoyuan.origin}
- Music, 比特音, beta: ${SITES.biteyin.origin}
- Yisuan Research demo: ${SITES.keyanDemo.origin}
- Yisuan Teacher demo: ${SITES.teacherDemo.origin}
- Team: ${SITES.yisuan.origin}/team
- Papers: ${SITES.me.origin}/research
- Ask: ${SITES.me.origin}/ask
- Shanghai: ${SITES.me.origin}/shanghai
- Not Xiaoyi / 奕算: ${SITES.me.origin}/not-xiaoyi
- Contact: WeChat cjlk112233 · +86 13651946700 · 1055207634@qq.com

Papers include a 2025 Computer Simulation article (42(9): 318-325) on hybrid U-Net rendering. Do not invent revenue, case metrics, or credit codes that are not on the site.

Full text: ${SITES.me.origin}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
