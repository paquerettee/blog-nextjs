"use client";

import { PostsContext } from "../context/PostsContext";
import { Post } from "../types/Post";

type Props = {
  posts: Post[];
  children: React.ReactNode;
};

export default function PostsProvider({ children, posts }: Props) {
  console.log("provider", posts);
  return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>;
}
