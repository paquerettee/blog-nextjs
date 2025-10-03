"use client";

import EditPost from "../../components/EditPost";
import Heading from "../../components/Heading";

export default function EditPostPage() {
  return (
    <div className="p-4">
      <Heading level={3}>Edit post</Heading>
      <EditPost />
    </div>
  );
}
