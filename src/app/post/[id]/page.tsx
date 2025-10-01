"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { usePosts } from "./../../context/PostsContext";

export default function PostPage() {
  const { id } = useParams();
  const { posts } = usePosts();
  console.log(posts);

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-blue-100 p-8">
      <main className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <div className="text-right">
          <Link
            href={`/`}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
