import { SingleComment } from '../../core/hooks/comments/types';
import { User } from '../../core/hooks/users/types';
import { Post } from '../../core/hooks/posts/types';

export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
