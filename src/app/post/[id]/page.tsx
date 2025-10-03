"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { usePosts } from "./../../context/PostsContext";
import Heading from "@/app/components/Heading";
import DecisionDialog from "@/app/components/DecisionDialog";
import toast from "react-hot-toast";

export default function PostPage() {
  const { id } = useParams();
  const { posts, deletePost } = usePosts();
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found!</p>;

  const handleDelete = async () => {
    setShowDialog(true);
  };

  const confirmDelete = async () => {
    console.log("confirm delete: ", post.id);
    setShowDialog(false);
    if (post.id) {
      const postId = await deletePost(post.id);
      if (postId) {
        // console.log("post deleted id: ", postId);
        // router.push("/");
        router.push("/post-deleted");
        toast.success("Post deleted!");
      }
    }
  };

  return (
    <>
      {showDialog && (
        <DecisionDialog
          message={`Do you really want to delete "${post.title}"?`}
          confirmLabel="Delete"
          rejectLabel="Keep"
          onConfirm={confirmDelete}
          onReject={() => setShowDialog(false)}
        />
      )}

      <main className="max-w-3xl mx-auto p-6 space-y-6">
        <Heading level={3}>{post.title}</Heading>
        <p className="text-gray-700">{post.body}</p>
        <div className="flex items-center">
          <div className="mr-auto">
            <Link
              href={`/`}
              className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Back
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={`/edit-post/${post.id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
