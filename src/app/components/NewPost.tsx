"use client";

import { useState } from "react";
import { usePosts } from "../context/PostsContext";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const { addPost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return;
    const postId = await addPost(title, body);
    router.push(`/post/${postId}?success=true`);
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-2/3">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              required
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-1">Content</h2>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your post here..."
              required
              rows={4}
              className="w-full border border-blue-200 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="block mx-auto bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}
