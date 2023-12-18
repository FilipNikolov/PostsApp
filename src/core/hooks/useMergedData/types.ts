import { SingleComment } from '../comments/types';
import { User } from '../users/types';
import { Post } from '../posts/types';

export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
