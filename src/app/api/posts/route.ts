import { getPosts, savePost, updatePost } from "../../../utils/posts_io";

export async function GET() {
  const posts = getPosts();
  return Response.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newPost = savePost(body);
  return Response.json(newPost);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const updatedPost = updatePost(body);
  return Response.json(updatedPost);
}
