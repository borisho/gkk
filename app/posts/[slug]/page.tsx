import { Suspense } from "react";
import { cacheLife } from "next/cache";

export default async function Posts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <SearchContent params={params} />
    </Suspense>
  );
}

async function SearchContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Post Page: {slug}</h1>
    </div>
  );
}
