import fs from "fs";
import path from "path";
import { Post } from "../app/types/Post";

const filePath = path.join(process.cwd(), "data", "posts.json");

export function getPosts(): Post[] {
  console.log("utils: getting posts");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function savePost(post: Omit<Post, "id">): Post {
  const posts = getPosts();
  const maxId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) : 0;

  const newPost: Post = {
    id: maxId + 1,
    title: post.title,
    body: post.body,
    // date: new Date().toISOString(),
  };

  posts.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  return newPost;
}

export function updatePost(post: Post): Post | null {
  const posts = getPosts();
  const index = posts.findIndex((p) => p.id === post.id);
  if (index === -1) return null;

  posts[index] = post;
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  return post;
}
