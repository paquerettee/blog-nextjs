"use client";

import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "Why Next.js Is Awesome",
    excerpt: "A deep dive into the framework that powers modern web apps.",
  },
  {
    id: "2",
    title: "Tailwind CSS Tips",
    excerpt: "Utility-first styling tricks to make your UI pop.",
  },
];

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">📘 My Dev Blog</h1>
      <p className="text-gray-600">Thoughts, tutorials, and ramblings on web development.</p>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border rounded p-4 hover:shadow transition">
            <Link
              href={`/post/${post.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
