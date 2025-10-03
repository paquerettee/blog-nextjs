"use client";

import { createContext, useContext } from "react";
import { Post } from "../types/Post";

export interface PostsContextType {
  posts: Post[];
  addPost: (title: string, body: string) => Promise<number>;
  updatePost: (id: number, title: string, body: string) => void;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: async () => {
    return 0;
  },
  updatePost: async () => {},
});

export const usePosts = () => useContext(PostsContext);
