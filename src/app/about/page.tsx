export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-blue-100 p-8 space-y-6">
      <h1 className="text-4xl font-bold text-blue-400 text-center">About This Blog</h1>

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
