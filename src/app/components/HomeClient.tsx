"use client";

import PostList from "../components/PostList";
import NewPost from "../components/NewPost";

export default function HomeClient() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold"> My Dev Blog</h1>
      <p className="text-gray-600">Thoughts, tutorials, and ramblings on web development.</p>
      <PostList />
      <NewPost />
    </main>
  );
}
