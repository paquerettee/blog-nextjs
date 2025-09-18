"use client";

import { usePosts } from "../context/PostsContext";
import PostList from "../components/PostList";

export default function HomeClient() {
  const posts = usePosts();

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold"> My Dev Blog</h1>
      <p className="text-gray-600">Thoughts, tutorials, and ramblings on web development.</p>
      <PostList posts={posts} />
    </main>
  );
}
