import type { CollectionEntry } from "astro:content";
import { clsx, type ClassValue } from "clsx";
import markdownit from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

const md = new markdownit();

export function getDescription(
  post: CollectionEntry<"blog"> | CollectionEntry<"projects">
) {
  if (post.data.description) {
    return post.data.description;
  }
  const html = md.render(post.body);
  const sanitized = sanitizeHtml(html, { allowedTags: [] });
  return sanitized.slice(0, 100);
}
