import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import useCommentsData from '../../hooks/comments/useCommentsData';
import { SingleComment, GetCommentsQuery} from '../types';

const useGetCommentsQuery = () : GetCommentsQuery => {
  const { data, isLoading, isError } = useQuery<SingleComment[]>(
    { queryKey: ['comments'], queryFn: useCommentsData }
  );

  const result = useMemo(()=> ({
    allComments: data || [],
    isLoadingComments: isLoading,
    isErrorComments: isError,
  }),[data, isLoading, isError]);

return result;
};

export default useGetCommentsQuery;
