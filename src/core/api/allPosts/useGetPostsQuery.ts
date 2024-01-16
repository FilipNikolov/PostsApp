import {useMemo} from 'react';
import { useQuery } from '@tanstack/react-query';
import usePostsData from '../../hooks/posts/usePostsData';
import { Post,GetPostsQuery } from '../types';

const useGetPostsQuery = () : GetPostsQuery => {
  const { data, isError, isLoading } = useQuery<Post[]>(
    { queryKey: ['posts'], queryFn: usePostsData }
  );
  const result = useMemo(()=> ({
    allPosts: data || [],
    isLoadingPosts: isLoading,
    isErrorPosts: isError,
  }),[data, isLoading, isError]);

return result;
};

export default useGetPostsQuery;
