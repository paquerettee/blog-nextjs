"use client";

import NewPost from "../components/NewPost";

export default function NewPostPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
      <NewPost />
    </div>
  );
}
