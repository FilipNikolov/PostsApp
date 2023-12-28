import { useQuery } from '@tanstack/react-query';
import usePostsData from '../hooks/posts/usePostsData';
import { Post } from './types';

const useGetPostsQuery = () => {
  const { data, isError, isLoading } = useQuery<Post[]>(
    { queryKey: ['posts'], queryFn: usePostsData }
  );
  return {
    allPosts: data || [],
    isLoadingPosts: isLoading,
    isErrorPosts: isError,
  };
};

export default useGetPostsQuery;
