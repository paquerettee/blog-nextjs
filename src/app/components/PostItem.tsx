import Link from "next/link";
import { useState } from "react";
import { Post } from "../types/Post";

type PostItemProps = Post;

export default function PostItem({ id, title, body }: PostItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-4 border-blue-100 p-4 max-w-6xl rounded hover:shadow transition bg-white text-gray-700 dark:bg-neutral-900 dark:text-blue-200">
      <h2
        className="text-xl font-semibold cursor-pointer hover:text-blue-400"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {title}
      </h2>
      {isExpanded ? (
        <>
          <p className="mt-2">{body.slice(0, 500)}</p>
          <div className="text-right">
            <Link href={`/post/${id}`}>
              <button className="mt-2 px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
                Read more...
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="hidden md:block mt-2">{body.slice(0, 220)}...</p>
      )}
    </div>
  );
}
