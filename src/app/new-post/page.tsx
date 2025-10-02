"use client";

import NewPost from "../components/NewPost";
import Heading from "../components/Heading";

export default function NewPostPage() {
  return (
    <div className="p-4">
      <Heading level={3}>Create a New Post</Heading>
      <NewPost />
    </div>
  );
}
