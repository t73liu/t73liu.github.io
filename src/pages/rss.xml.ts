import rss from "@astrojs/rss";
import { HOME } from "@consts";
import { getCollection } from "astro:content";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: blog.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
