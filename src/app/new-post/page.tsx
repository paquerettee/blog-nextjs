"use client";

import EditPost from "../components/EditPost";
import Heading from "../components/Heading";

export default function NewPostPage() {
  return (
    <div className="p-4">
      <Heading level={3}>Create a new post</Heading>
      <EditPost />
    </div>
  );
}
