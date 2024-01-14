import { SingleComment, Post, User } from '../../api/types';

export type FullPost = {
  post: Post;
  user?: User;
  comments: SingleComment[];
};
export type MergedData = {
  mergedData: FullPost[];
  reducedData?: {
    titles: string[];
    usernames: string[];
    bodies: string[];
    comments: Comment[];
  };
  loading: boolean,
  isError:boolean,
};
