"use client";

import PostItem from "./PostItem";
import { usePosts } from "../context/PostsContext";

export default function PostList() {
  const { posts } = usePosts();
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div className="flex flex-col gap-4 text-black dark:bg-neutral-800 dark:text-white ">
      {posts.map((post) => {
        // console.log(post.id);
        return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
}
