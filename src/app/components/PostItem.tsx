import Link from "next/link";
import { useState } from "react";

type PostItemProps = {
  id: number;
  title: string;
  body: string;
};

export default function PostItem({ id, title, body }: PostItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border p-4 rounded mb-4 hover:shadow transition">
      <h2
        className="text-xl font-semibold cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {title}
      </h2>
      {isExpanded ? (
        <>
          <p className="mt-2">{body}</p>
          <Link href={`/post/${id}`}>
            <button className="mt-2 text-blue-600 underline">Read more...</button>
          </Link>
        </>
      ) : (
        <p className="mt-2">{body.slice(0, 100)}...</p>
      )}
    </div>
  );
}
