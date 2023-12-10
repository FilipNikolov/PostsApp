import axios from 'axios';
import { useEffect, useState } from 'react';
import { COMMENTS_ROUTE } from '../../../constant';
import { SingleComment } from './types';
import { URL } from '../../../config';

const useCommentsData = () => {
  const [allComments, setAllComments] = useState<SingleComment[]>([]);
  const fetchData = async () => {
    try {
      const commentsResponse = await axios.get(`${URL}/${COMMENTS_ROUTE}`);
      setAllComments(commentsResponse.data);
    } catch (error) {
      console.error('Error fetching commnets', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { allComments };
};
export default useCommentsData;
