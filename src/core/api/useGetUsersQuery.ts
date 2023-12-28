import { UseQueryResult, useQuery } from '@tanstack/react-query';
import useUserData from '../hooks/users/useUserData';
import { User } from './types';

const useGetUsersQuery = () => {
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
