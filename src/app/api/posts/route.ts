import { getPosts, savePost } from "../../../utils/posts_io";

export async function GET() {
  const posts = getPosts();
  return Response.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newPost = savePost(body);
  return Response.json(newPost);
}
