import Heading from "../components/Heading";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <Heading level={2}>About this blog</Heading>

      <p className="text-gray-700">
        Welcome to my blog! This is a simple project built with React, Next.js, and TypeScript. Here
        I practice components, context, hooks, routing, and styling with Tailwind.
      </p>

      <p className="text-gray-700">
        The goal is to create a small, functional blog where you can view posts, add new posts, and
        experiment with different React features. Everything is client-side for now, with
        localStorage handling persistence.
      </p>

      <p className="text-gray-700">
        Feel free to explore the posts, check out the layout, and even try creating new content
        using the “New Post” form.
      </p>
    </div>
  );
}
