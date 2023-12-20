export type SingleComment = {
  id: number;
  email: string;
  body: string;
  postId: number;
};
export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
export type User = {
  name: string;
  id: number;
};
export type Posts = {
  allPosts: Post[];
  allUsers: User[];
  allComments: SingleComment[];
  isLoading: boolean;
  isError: boolean;
};
