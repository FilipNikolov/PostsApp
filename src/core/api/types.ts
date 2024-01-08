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
