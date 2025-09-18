import PostItem from "./PostItem";
import { usePosts } from "../context/PostsContext";

export default function PostList() {
  const { posts } = usePosts();
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
