import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";
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
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <ThemeWrapper>
            <PostsProvider posts={posts}>{children}</PostsProvider>
          </ThemeWrapper>
        </main>
      </body>
    </html>
  );
}
