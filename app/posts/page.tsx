import client from "@/app/mongodb";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { PostType } from "@appTypes/post";
import PostCard from "@postsComponents/PostCard";

export default async function Posts() {
  "use cache";
  cacheLife("days");

  const posts = client
    .db(process.env.DB_NAME!)
    .collection<PostType>(process.env.DB_COLLECTION!);
  const allPosts = await posts.find({}).sort({ date: -1 }).toArray();

  if (!allPosts) notFound();

  return (
    <section className="flex flex-col gap-5 items-center justify-center">
      <h1>Posts Page</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
        {allPosts.map((post) => (
          <PostCard key={post._id.toString()} post={post} />
        ))}
      </Suspense>
    </section>
  );
}
