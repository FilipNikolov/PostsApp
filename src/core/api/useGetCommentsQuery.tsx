import { useQuery } from '@tanstack/react-query';
import useCommentsData from '../hooks/comments/useCommentsData';
import { SingleComment } from './types';

const useGetCommentsQuery = () => {
  const { data, isLoading, isError } = useQuery<SingleComment[]>(
    { queryKey: ['comments'], queryFn: useCommentsData }
  );
  return {
    allComments: data || [],
    isLoadingComments: isLoading,
    isErrorComments: isError,
  };
};

export default useGetCommentsQuery;
