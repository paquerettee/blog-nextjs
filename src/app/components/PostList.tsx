"use client";

import { useState } from "react";
import PostItem from "./PostItem";
import { usePosts } from "../context/PostsContext";

const POSTS_PER_PAGE = 5;

export default function PostList() {
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);

  if (posts.length === 0) return <p>No posts yet.</p>;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="flex flex-col gap-4 text-black dark:bg-neutral-800 dark:text-white ">
      {/* {posts.map((post) => { */}
      {currentPosts.map((post) => {
        // console.log(post.id);
        return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />;
      })}

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500 "
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
