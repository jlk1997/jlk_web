import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { askItems } from "@jlk/core/data/ask";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    article: z.string(),
    locale: z.enum(["zh", "en"]),
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
  }),
});

const ask = defineCollection({
  loader: async () =>
    askItems.map((item) => ({
      id: item.slug,
      ...item,
    })),
  schema: z.object({
    slug: z.string(),
    category: z.enum(["identity", "company", "geo", "agent", "services", "collaborate", "capital", "life"]),
    question: z.object({ zh: z.string(), en: z.string() }),
    answer: z.object({ zh: z.string(), en: z.string() }),
  }),
});

export const collections = { writing, ask };
