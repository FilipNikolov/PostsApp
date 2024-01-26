import axios from 'axios';
import { COMMENTS_ROUTE } from '../../../constant';
import { URL } from '../../../config';

const commentsFetch = async () => {
  try {
    const commentsResponse = await axios.get(`${URL}${COMMENTS_ROUTE}`);
    return commentsResponse.data;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

export default commentsFetch;
