import { profile } from "./profile";

export async function getMediumPosts() {
  try {
    const res = await fetch(profile.medium.replace("medium.com", "medium.com/feed"), {
      next: { revalidate: 60 * 60 * 6 },
      headers: { "User-Agent": "nur-portfolio" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 6);
    return items
      .map((match) => {
        const block = match[1];
        return {
          title: decode(pick(block, "title")),
          link: pick(block, "link"),
          date: pick(block, "pubDate"),
          excerpt: excerptFrom(pick(block, "description") || pick(block, "content:encoded")),
        };
      })
      .filter((post) => post.title && post.link);
  } catch {
    return [];
  }
}

function pick(block, tag) {
  const cdata = block.match(
    new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`)
  );
  if (cdata) return cdata[1].trim();
  const plain = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return plain ? plain[1].trim() : "";
}

function excerptFrom(value) {
  const text = decode(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trim()}…`;
}

function decode(value) {
  return value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
