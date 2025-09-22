"use client";
import Link from "next/link";

import { usePosts } from "../context/PostsContext";

export default function Sidebar() {
  const { posts } = usePosts();
  if (posts.length === 0) return <p>No posts yet.</p>;
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      <Link href="/new-post">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add New Post
        </button>
      </Link>
    </>
  );
}
