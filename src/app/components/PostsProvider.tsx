"use client";

import { useState, useEffect } from "react";
import { PostsContext, PostsContextType } from "../context/PostsContext";
import { Post } from "../types/Post";

type Props = {
  posts: Post[];
  children: React.ReactNode;
};

export default function PostsProvider({ children, posts: initialPosts }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Merge localStorage posts with server initial posts
  // useEffect(() => {
  //   const stored = localStorage.getItem("posts");
  //   if (stored) {
  //     const localPosts: Post[] = stored ? JSON.parse(stored) : [];
  //     // Only add local posts that are not already in initialPosts
  //     setPosts([...localPosts, ...initialPosts]);
  //   }
  // }, [initialPosts]);
  useEffect(() => {
    console.log("provider: fetching posts");
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const addPost = async (title: string, body: string) => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const newPost: Post = await res.json();
    setPosts((prev) => [...prev, newPost]);
    return newPost.id;
  };

  const value: PostsContextType = { posts, addPost };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
