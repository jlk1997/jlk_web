import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { person, SITES } from "@jlk/core/data/facts";

export async function GET(context: APIContext) {
  const posts = await getCollection("writing");
  return rss({
    title: person.name.zh,
    description: person.headline.zh,
    site: context.site ?? SITES.me.origin,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.datePublished),
      link: post.data.locale === "zh" ? `/writing/${post.data.article}` : `/en/writing/${post.data.article}`,
    })),
  });
}
