import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";
import PostsProvider from "./components/PostsProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let posts = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    posts = data.slice(0, 10);
  } catch (error) {
    console.error("Error while fetching posts: ", error);
  }

  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <PostsProvider posts={posts}>{children}</PostsProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
