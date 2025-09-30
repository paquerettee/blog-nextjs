"use client";

import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";

export default function HomeClient() {
  return (
    // <section className="max-w-3xl w-auto lg:w-full mx-auto p-6 space-y-6">
    <section className="w-auto lg:w-full mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-500 dark:text-blue-400 tracking-tight ">
        My Dev Blog
      </h1>
      <p className="text-gray-900">Thoughts, tutorials, and ramblings on web development.</p>
      <section className="flex gap-10">
        <PostList />
        <Sidebar />
      </section>
    </section>
  );
}
