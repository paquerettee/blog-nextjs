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
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (title: string, body: string) => {
    console.log("addPost");
    const newPost: Post = { id: Date.now(), title, body };
    setPosts((prev) => [...prev, newPost]);
    return newPost.id;
  };

  const value: PostsContextType = { posts, addPost };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
