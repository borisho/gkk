import client from "@/app/mongodb";
import { notFound } from "next/navigation";
import { PostType } from "@appTypes/posts";
import Posts from "@postsComponents/Posts";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function PostsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const parsedPage = params.page ?? 0;
  const page = +parsedPage - 1 < 0 ? 0 : +parsedPage - 1;

  const collection = client
    .db(process.env.DB_NAME!)
    .collection<PostType>(process.env.DB_COLLECTION!);

  const count = await collection.count();

  const posts = await collection
    .find({})
    .skip(page * 10)
    .limit(10)
    .sort({ date: -1 })
    .toArray();

  if (!posts) notFound();

  return (
    <section className="flex flex-col gap-5 items-center justify-center">
      <h1>Posts Page: {count}</h1>
      <Posts
        posts={posts}
        currentPage={page}
        totalPages={Math.ceil(count / 10)}
      />
    </section>
  );
}
