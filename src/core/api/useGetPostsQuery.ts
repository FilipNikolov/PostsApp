import { UseQueryResult, useQuery } from 'react-query';
import usePostsData from '../hooks/posts/usePostsData';
import useUserData from '../hooks/users/useUserData';
import useCommentsData from '../hooks/comments/useCommentsData';
import { SingleComment, Post, User, Posts } from './types';

const useGetPostsQuery = (): Posts => {
  const postsQuery: UseQueryResult<Post[]> = useQuery(
    { queryKey: ['posts'], queryFn: usePostsData }
  );
  const usersQuery: UseQueryResult<User[]> = useQuery(
    { queryKey: ['users'], queryFn: useUserData }
  );
  const commentsQuery: UseQueryResult<SingleComment[]> = useQuery(
    { queryKey: ['comments'], queryFn: useCommentsData }
  );

  const isLoading = postsQuery.isLoading || usersQuery.isLoading || commentsQuery.isLoading;
  const isError = postsQuery.isError || usersQuery.isError || commentsQuery.isError;

  return {
    allPosts: postsQuery.data || [],
    allUsers: usersQuery.data || [],
    allComments: commentsQuery.data || [],
    isError,
    isLoading
  };
};

export default useGetPostsQuery;
