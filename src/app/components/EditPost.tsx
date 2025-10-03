"use client";

import { useState, useEffect } from "react";
import { usePosts } from "../context/PostsContext";
import { useRouter, useParams } from "next/navigation";

export default function EditPost() {
  const { id } = useParams();
  const { posts } = usePosts();
  const { addPost, updatePost } = usePosts();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const postId = Number(id);
    if (postId) {
      const post = posts.find((p) => p.id === postId);
      if (post) {
        setTitle(post.title);
        setBody(post.body);
      }
    }
  }, [id, posts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let postId = Number(id);
    if (!title || !body) return;
    if (postId) await updatePost(postId, title, body);
    else postId = await addPost(title, body);
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
            Save Post
          </button>
        </form>
      </div>
    </>
  );
}
