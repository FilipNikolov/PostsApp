import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import useUserData from '../../hooks/users/useUserData';
import { User, GetUsersQuery } from '../types';

const useGetUsersQuery = () : GetUsersQuery => {
  const { data, isLoading, isError } = useQuery<User[]>(
    { queryKey: ['users'], queryFn: useUserData }
  );

  const result = useMemo(()=> ({
    allUsers: data || [],
    isLoadingUsers: isLoading,
    isErrorUsers: isError,
  }),[data, isLoading, isError]);

return result;
};

export default useGetUsersQuery;
