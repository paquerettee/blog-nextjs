import { getPosts, savePost, updatePost, deletePost } from "../../../utils/posts_io";

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

export async function DELETE(req: Request) {
  const body = await req.json();
  const deletedPost = deletePost(body);
  return Response.json(deletedPost);
}
