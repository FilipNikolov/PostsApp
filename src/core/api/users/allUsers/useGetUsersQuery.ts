import { useQuery } from '@tanstack/react-query';
import useUserData from '../useUserData';
import { User, GetUsersQuery } from '../../types';

const useGetUsersQuery = () : GetUsersQuery => {
  const { data, isLoading, isError } = useQuery<User[]>(
    { queryKey: ['users'], queryFn: useUserData }
  );

return {
  allUsers: data || [],
  isLoadingUsers: isLoading,
  isErrorUsers: isError,
};
};

export default useGetUsersQuery;
