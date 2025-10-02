import "./globals.css";
import Navbar from "./components/Navbar";
import PostsProvider from "./components/PostsProvider";
import { Post } from "./types/Post";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts: Post[] = [];

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black dark:bg-red-900 dark:text-yellow-300">
        <header>
          <Navbar />
        </header>
        <Toaster position="top-center" />
        <main className="py-12 px-6 dark:bg-neutral-900">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-blue-100 p-8">
            <PostsProvider posts={posts}>{children}</PostsProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
