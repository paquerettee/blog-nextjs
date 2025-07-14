// app/post/[id]/page.tsx

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = {
    title: `Post #${id}`,
    content: `This is the full content of post #${id}. It’s dynamically rendered!`,
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-sm text-gray-400">Post ID: {id}</p>
    </main>
  );
}
