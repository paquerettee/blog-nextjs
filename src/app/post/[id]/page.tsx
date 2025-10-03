"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { usePosts } from "./../../context/PostsContext";
import Heading from "@/app/components/Heading";

export default function PostPage() {
  const { id } = useParams();
  const { posts } = usePosts();
  console.log(posts);

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Heading level={3}>{post.title}</Heading>
      <p className="text-gray-700">{post.body}</p>
      <div className="flex justify-end gap-4">
        <Link
          href={`/edit-post/${post.id}`}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Edit
        </Link>
        <Link
          href={`/`}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
