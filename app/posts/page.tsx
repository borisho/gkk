import client from "@/app/mongodb";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@appTypes/post";

export default async function Posts() {
  "use cache";
  cacheLife("days");

  const posts = client
    .db(process.env.DB_NAME!)
    .collection<Post>(process.env.DB_COLLECTION!);
  const allPosts = await posts.find({}).sort({ date: -1 }).toArray();

  if(!allPosts) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Posts Page</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        {allPosts.map((post) => (
          <div key={post._id.toString()} className="flex flex-col items-center">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <h3>By: {post.author}</h3>
            <p>{post.date.toString()}</p>
            <Image
              src={process.env.IMAGE_URI! + post.authorImage}
              alt={post.author}
              width={100}
              height={100}
            />
            <Link href={`/posts/${post.slug}`}>Read more</Link>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
