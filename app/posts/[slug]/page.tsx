import { Suspense } from "react";
import Post from "@postComponents/Post";

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
      <Post params={params} />
    </Suspense>
  );
}
