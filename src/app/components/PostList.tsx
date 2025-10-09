"use client";

import { useState } from "react";
import PostItem from "./PostItem";
import { usePosts } from "../context/PostsContext";

const POSTS_PER_PAGE = 5;

export default function PostList() {
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [endMobile, setEndMobile] = useState(POSTS_PER_PAGE);

  if (posts.length === 0) return <p>No posts yet.</p>;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startDesktop = (currentPage - 1) * POSTS_PER_PAGE;
  const endDesktop = startDesktop + POSTS_PER_PAGE;
  const desktopPosts = posts.slice(startDesktop, endDesktop);

  const mobilePosts = posts.slice(0, endMobile);

  function loadPostsMobile() {
    setEndMobile(
      endMobile + POSTS_PER_PAGE > posts.length ? posts.length : endMobile + POSTS_PER_PAGE
    );
  }

  function loadPostsDesktop(page: number) {
    setCurrentPage(page);
  }

  return (
    <div className="flex flex-col gap-4 text-black dark:bg-neutral-800 dark:text-white ">
      {/* mobile view */}
      <div className="block md:hidden">
        {mobilePosts.map((post) => {
          return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />;
        })}
        <button
          className="flex justify-center mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={loadPostsMobile}
        >
          Load more posts
        </button>
      </div>

      {/* desktop view */}
      <div className="hidden md:block">
        {desktopPosts.map((post) => {
          return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />;
        })}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => {
                loadPostsDesktop(page);
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
    </div>
  );
}
