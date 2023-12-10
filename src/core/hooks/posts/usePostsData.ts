import axios from 'axios';
import { useEffect, useState } from 'react';
import { POSTS_ROUTE } from '../../../constant';
import { Post } from './types';
import { URL } from '../../../config';

const usePostsData = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const fetchData = async () => {
    try {
      const postsResponse = await axios.get(`${URL}${POSTS_ROUTE}`);
      setAllPosts(postsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { allPosts };
};

export default usePostsData;
