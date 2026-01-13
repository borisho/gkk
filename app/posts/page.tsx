import client from "@/app/mongodb";
import { Suspense } from "react";
import { cacheLife } from "next/cache";

export default async function Posts() {
  "use cache";
  cacheLife("days");

  const posts = client.db("gkk").collection("posts");
  const allPosts = await posts.find().toArray();

  return (
    <div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Posts Page</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        {allPosts.map((post) => (
          <div key={post._id.toString()} className="flex flex-col items-center">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <h3>By: {post.slug}</h3>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
