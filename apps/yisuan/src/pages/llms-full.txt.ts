import type { APIRoute } from "astro";
import { askItems } from "@jlk/core/data/ask";
import { organizations, product, SITES } from "@jlk/core/data/facts";

export const GET: APIRoute = () => {
  const items = askItems.filter((item) => ["company", "geo", "services"].includes(item.category));
  const q = items
    .map((item) => `## ${item.question.zh}\n\n${item.answer.zh}\n\n${item.answer.en}`)
    .join("\n\n");
  const body = `# ${organizations.yisuan.legalName.zh}

${organizations.yisuan.description.zh}

${organizations.yisuan.description.en}

Lines: mini-program shop ${SITES.yisuan.origin}/ecommerce · AI guide ${SITES.yisuan.origin}/ai-commerce · custom mini program ${SITES.yisuan.origin}/custom
Other: 比特音 ${SITES.biteyin.origin} · 小源AI ${product.url} · 蚁算老师 ${SITES.teacherDemo.origin} · 蚁算科研 ${SITES.keyanDemo.origin}
Price: a ready shop is paid by the year, a custom build is quoted as a project. The number is not published. A written quote follows a conversation. Payments go to the merchant’s own WeChat Pay account. Not included: WeChat verification, WeChat Pay fees, photos, listing products.
Team: ${SITES.yisuan.origin}/team
Founder site: ${SITES.me.origin}

${q}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
