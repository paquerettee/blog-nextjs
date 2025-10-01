import "./globals.css";
import Navbar from "./components/Navbar";
import PostsProvider from "./components/PostsProvider";
import { Post } from "./types/Post";

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
        <main className="py-12 px-6 dark:bg-neutral-900">
          <PostsProvider posts={posts}>{children}</PostsProvider>
        </main>
      </body>
    </html>
  );
}
