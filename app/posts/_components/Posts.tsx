import { PostType } from "@appTypes/posts";
import PostCard from "@postsComponents/PostCard";
import Pagination from "@postsComponents/Pagination";

export default function Posts({
  posts,
  currentPage,
  totalPages,
}: {
  posts: PostType[];
  currentPage: number;
  totalPages: number;
}) {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id.toString()} post={post} />
      ))}
      <Pagination
        path="/posts"
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}
