import { Suspense } from "react";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<div>Loading posts...</div>}>{children}</Suspense>;
}
