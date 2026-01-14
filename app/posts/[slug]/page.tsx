import client from "@/app/mongodb";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "@appTypes/post";

// TODO refactor class
export default async function Posts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading post metadata...
        </div>
      }
    >
      <PostContent params={params} />
    </Suspense>
  );
}

async function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const posts = client
    .db(process.env.DB_NAME!)
    .collection<Post>(process.env.DB_COLLECTION!);

  const post = await posts.findOne(
    { slug: slug },
    { projection: { excerpt: 0 } }
  );

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Post not found.
      </div>
    );
  }

  return (
    <article className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex gap-10 m-5">
        <h1>{post.title}</h1>
        <p>{post.category}</p>
      </header>
      <section className="flex flex-col gap-2 items-center justify-center">
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              Loading post...
            </div>
          }
        >
          <BodyContent slug={slug} />
        </Suspense>
      </section>
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
        <time>{post.date.toDateString()}</time>
      </footer>
    </article>
  );
}

async function BodyContent({ slug }: { slug: string }) {
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
