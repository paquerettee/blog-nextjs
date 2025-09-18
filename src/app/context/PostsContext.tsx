"use client";

import { createContext, useContext } from "react";
import { PostsContextType } from "../types/Post";

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: () => {},
});

export const usePosts = () => useContext(PostsContext);
