export type Post = {
  id: string | number;
  title: string;
  body: string;
};

export interface PostsContextType {
  posts: Post[];
  addPost: (title: string, body: string) => void;
}
