"use client";

import { usePosts } from "../context/PostsContext";
import NewPost from "../components/NewPost";

export default function Sidebar() {
  const { posts } = usePosts();
  if (posts.length === 0) return <p>No posts yet.</p>;
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      <NewPost />
    </>
  );
}
