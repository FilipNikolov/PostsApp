import axios from 'axios';
import { USER_ROUTE } from '../../../constant';
import { URL } from '../../../config';

const usersFetch = async () => {
  try {
    const usersResponse = await axios.get(`${URL}${USER_ROUTE}`);
    return usersResponse.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
export default usersFetch;
