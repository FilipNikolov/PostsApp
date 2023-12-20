import { SingleComment, Post, User } from '../../api/types';

export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
