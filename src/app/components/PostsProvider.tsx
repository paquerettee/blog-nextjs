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

  useEffect(() => {
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

    const savedPost: Post = await res.json();
    setPosts((prev) => [...prev, savedPost]);
    return savedPost.id;
  };

  const updatePost = async (id: number, title: string, body: string) => {
    const res = await fetch("/api/posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, body }),
    });
    const savedPost: Post = await res.json();
    setPosts((prev) => prev.map((post) => (post.id === savedPost.id ? savedPost : post)));
    return savedPost.id;
  };

  const deletePost = async (id: number) => {
    const res = await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const deletedPost = await res.json();
    setPosts((prev) => prev.filter((post) => post.id !== deletedPost.id));
    return deletedPost.id;
  };

  const value: PostsContextType = { posts, addPost, updatePost, deletePost };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
