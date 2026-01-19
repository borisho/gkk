import client from "@/app/mongodb";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PostType } from "@appTypes/posts";
import MarkdownProcessor from "@postComponents/MarkdownProcessor";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const posts = client
    .db(process.env.DB_NAME!)
    .collection<PostType>(process.env.DB_COLLECTION!);

  const post = await posts.findOne(
    { slug: slug },
    { projection: { excerpt: 0 } }
  );

  if (!post) notFound();

  return (
    <article className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <header className="flex gap-10 m-5">
        <h1>{post.title}</h1>
        <p>{post.category}</p>
      </header>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            Loading post...
          </div>
        }
      >
        <MarkdownProcessor slug={slug} />
      </Suspense>
      <footer className="flex gap-10 items-center m-5">
        <div className="flex gap-2 items-center">
          <span>By: {post.author}</span>
          <Image
            src={process.env.IMAGE_URI! + post.authorImage}
            alt={post.author}
            width={50}
            height={50}
          />
        </div>
        <time>{post.date.toLocaleString("sk-SK")}</time>
      </footer>
    </article>
  );
}
