import axios from 'axios';
import { useEffect, useState } from 'react';
import { USER_ROUTE } from '../../../constant';
import { User } from './types';
import { URL } from '../../../config';

const useUserData = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const fetchData = async () => {
    try {
      const usersResponse = await axios.get(`${URL}${USER_ROUTE}`);
      setAllUsers(usersResponse.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { allUsers };
};
export default useUserData;
