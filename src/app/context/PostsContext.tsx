"use client";

import { createContext, useContext } from "react";
import { Post } from "../types/Post";

export const PostsContext = createContext<Post[]>([]);
export const usePosts = () => useContext(PostsContext);
