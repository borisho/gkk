import Image from "next/image";
import Link from "next/link";
import { PostType } from "@appTypes/posts";

export default function PostCard({ post }: { post: PostType }) {
  return (
    <article className="flex flex-col items-center gap-2">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <footer className="flex items-center gap-1">
        <div className="flex flex-col items-center gap-1">
          <h3>By: {post.author}</h3>
          <p>{post.date.toLocaleString("sk-SK")}</p>
        </div>
        <Image
          src={process.env.IMAGE_URI! + post.authorImage}
          alt={post.author}
          width={100}
          height={100}
        />
        <Link href={`/posts/${post.slug}`}>Read more</Link>
      </footer>
    </article>
  );
}
