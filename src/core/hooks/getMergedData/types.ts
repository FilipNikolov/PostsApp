import { SingleComment, Post, User } from '../../api/types';

export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
export type MergedData = { mergedData: FullPost[]; isError: boolean; loading: boolean };
