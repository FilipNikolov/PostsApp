// eslint-disable-next-line import/no-cycle
import { FullPost } from '../hooks/getMergedData/types';

export type SingleComment = {
  id: number;
  email: string;
  body: string;
  postId: number;
};
export type Post = {
  push(fullPost: FullPost): unknown;
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type User = {
  name: string;
  id: number;
};
export type GetUsersQuery = {
  allUsers: User[];
  isLoadingUsers:boolean;
  isErrorUsers:boolean;
};
export type GetPostsQuery = {
  allPosts: Post[];
  isLoadingPosts:boolean;
  isErrorPosts:boolean;
};
export type GetCommentsQuery = {
  allComments: SingleComment[];
  isLoadingComments: boolean;
  isErrorComments: boolean;
};
export type Posts = {
  allPosts: GetPostsQuery;
  allUsers: GetUsersQuery;
  allComments: GetCommentsQuery;
  isLoading: boolean;
  isError: boolean;
};
