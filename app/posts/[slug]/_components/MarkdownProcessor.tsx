import { cacheLife } from "next/cache";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function MarkdownProcessor({ slug }: { slug: string }) {
  "use cache";
  cacheLife("max");

  const resp = await fetch(process.env.POSTS_URI! + slug + ".md");
  const content = await resp.text();

  if (!content) {
    return (
      <div className="flex items-center justify-center">
        Failed to load post content.
      </div>
    );
  }

  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}
