"use client";

import { useParams } from "next/navigation";
import { usePosts } from "./../../context/PostsContext";

export default function PostPage() {
  const { id } = useParams();
  const posts = usePosts();
  console.log(posts);

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </main>
  );
}
