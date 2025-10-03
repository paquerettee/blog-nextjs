"use client";
import Link from "next/link";

import { usePosts } from "../context/PostsContext";

export default function Sidebar() {
  const { posts } = usePosts();
  // if (posts.length === 0) return <p>No posts yet.</p>;
  const recentPosts = posts.slice(0, 5);

  return (
    <aside className="flex flex-col gap-4 bg-blue-100 text-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold border-b border-gray-700/80 pb-2">Recent Posts</h3>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/post/${post.id}`}
              className="text-gray-700 hover:text-blue-400 transition-colors duration-200"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/new-post"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 mx-auto"
      >
        Add New Post
      </Link>
    </aside>
  );
}
