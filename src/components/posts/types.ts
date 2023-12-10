import { Post } from '../../core/hooks/posts/types';

export type SingleComment = {
  id: number;
  email: string;
  body: string;
  postId: number;
};
export type User = {
  name: string;
  id: number;
};
export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
