"use client";

import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";

export default function HomeClient() {
  return (
    // <section className="max-w-3xl w-auto lg:w-full mx-auto p-6 space-y-6">
    <section className="w-auto lg:w-full mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-blue-400 text-center tracking-tight mb-8">
        My Dev Blog
      </h1>

      <p className="text-1xl text-gray-700 text-center mb-8">
        Thoughts, tutorials, and ramblings on web development.
      </p>

      <section className="flex gap-10 items-start">
        <div className="flex-1">
          <PostList />
        </div>
        <div className="flex-shrink-0 max-w-64 w-full">
          <Sidebar />
        </div>
      </section>
    </section>
  );
}
