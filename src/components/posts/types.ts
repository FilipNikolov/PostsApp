export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
 export type SingleComment = {
    id: number;
    email: string;
    body: string;
    postId: number;
  };
 export type User = {
    name : string;
    id: number;
  };
export type FullPost = {
      post:Post;
      user?:User;
      comments:SingleComment[];
  }