import { useQuery } from '@tanstack/react-query';
import usePostsData from '../usePostsData';
import { Post,GetPostsQuery } from '../../types';

const useGetPostsQuery = () : GetPostsQuery => {
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
