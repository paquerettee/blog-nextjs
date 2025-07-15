"use client";

import { usePosts } from "../context/PostsContext";
import Link from "next/link";

export default function HomeClient() {
  const posts = usePosts();

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold"> My Dev Blog</h1>
      <p className="text-gray-600">Thoughts, tutorials, and ramblings on web development.</p>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-2 hover:shadow transition">
            <Link
              href={`/post/${post.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500">{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
