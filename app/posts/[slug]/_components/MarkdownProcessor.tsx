import { cacheLife } from "next/cache";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownFetchError from "@postComponents/MarkdownFetchError";

export default async function MarkdownProcessor({ slug }: { slug: string }) {
  "use cache";
  cacheLife("max");

  const resp = await fetch(process.env.POSTS_URI! + slug + ".md");
  const content = await resp.text();
  if (!resp.ok || !content) return <MarkdownFetchError />;

  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}
