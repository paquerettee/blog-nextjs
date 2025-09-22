"use client";

import { createContext, useContext } from "react";
import { Post } from "../types/Post";

export interface PostsContextType {
  posts: Post[];
  addPost: (title: string, body: string) => void;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: () => {},
});

export const usePosts = () => useContext(PostsContext);
