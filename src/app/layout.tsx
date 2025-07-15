import "./globals.css";
import PostsProvider from "./components/PostsProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => data.slice(0, 10));
  // console.log(posts);

  return (
    <html lang="en">
      <body>
        <PostsProvider posts={posts}>{children}</PostsProvider>
      </body>
    </html>
  );
}
