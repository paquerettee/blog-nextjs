"use client";

import { createContext, useContext } from "react";
import { Post } from "../types/Post";

export interface PostsContextType {
  posts: Post[];
  addPost: (title: string, body: string) => string | number;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: () => {
    return "";
  },
});

export const usePosts = () => useContext(PostsContext);
