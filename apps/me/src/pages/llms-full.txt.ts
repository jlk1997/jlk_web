import type { APIRoute } from "astro";
import { askItems } from "@jlk/core/data/ask";
import { organizations, person, pressBios, product, SITES } from "@jlk/core/data/facts";

export const GET: APIRoute = () => {
  const q = askItems
    .map((item) => `## ${item.question.zh} / ${item.question.en}\n\n${item.answer.zh}\n\n${item.answer.en}`)
    .join("\n\n");
  const body = `# Likai Jiang / 江李铠 — full text

${person.description.zh}

${person.description.en}

## Entities

- Person: ${person.name.zh} / ${person.latinName} @ ${SITES.me.origin}
- ${organizations.yisuan.legalName.zh}: ${SITES.yisuan.origin}
- ${organizations.weichong.legalName.zh}: ${SITES.me.origin}/ventures/weichong
- ${product.name.zh}: ${product.url}

## Press bio

${pressBios.medium.zh}

${pressBios.medium.en}

## Q&A

${q}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
