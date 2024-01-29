import axios from 'axios';
import { POSTS_ROUTE } from '../../route/constant-routes';
import { URL } from '../../../config';

const postsFetch = async () => {
  try {
    const postsResponse = await axios.get(`${URL}${POSTS_ROUTE}`);
    return postsResponse.data;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};
export default postsFetch;
