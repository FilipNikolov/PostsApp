import { useQuery } from '@tanstack/react-query';
import useCommentsData from '../useCommentsData';
import { SingleComment, GetCommentsQuery} from '../../types';

const useGetCommentsQuery = () : GetCommentsQuery => {
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
