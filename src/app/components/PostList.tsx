import PostItem from "./PostItem";
import { Post } from "../types/Post";

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
