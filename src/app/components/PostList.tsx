"use client";

import { useState } from "react";
import PostItem from "./PostItem";
import { usePosts } from "../context/PostsContext";

const POSTS_PER_PAGE = 5;

export default function PostList() {
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);

  if (posts.length === 0) return <p>No posts yet.</p>;

  const totalPages = Math.ceil(posts.length / visiblePostsCount);
  const firstPostIdx = (currentPage - 1) * visiblePostsCount;
  const lastPostIdx = firstPostIdx + visiblePostsCount;
  const currentPosts = posts.slice(firstPostIdx, lastPostIdx);

  function loadMorePosts() {
    setCurrentPage(1);
    setVisiblePostsCount(
      visiblePostsCount + POSTS_PER_PAGE > posts.length
        ? posts.length
        : visiblePostsCount + POSTS_PER_PAGE
    );
  }

  function loadNextPosts(page: number) {
    setCurrentPage(page);
    setVisiblePostsCount(POSTS_PER_PAGE);
  }

  return (
    <div className="flex flex-col gap-4 text-black dark:bg-neutral-800 dark:text-white ">
      {currentPosts.map((post) => {
        return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />;
      })}

      {/* load more button for mobiles */}
      <button
        className="block md:hidden mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={loadMorePosts}
      >
        Load more posts
      </button>

      {/* pagination buttons for desktop */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => {
              loadNextPosts(page);
            }}
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
