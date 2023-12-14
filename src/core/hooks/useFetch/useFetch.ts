import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import { POSTS_ROUTE, USER_ROUTE, COMMENTS_ROUTE } from '../../../constant';
import { User, Post, SingleComment } from './types';
import usePostsData from '../posts/usePostsData';

const useFetch = () => {
  const [post, setPost] = useState<Post>({
    id: -1,
    title: '',
    body: '',
    userId: -1,
  });
  const [comments, setComments] = useState<SingleComment[]>([]);
  const [user, setUser] = useState<User>({ name: '' });

  const params = useParams();

  const fetchData = async () => {
    try {
      const postRes = await axios.get(`${URL}${POSTS_ROUTE}/${params.id}`);
      setPost(postRes.data);

      const userRes = await axios.get(`${URL}${USER_ROUTE}/${postRes.data.userId}`);
      setUser(userRes.data);

      const commentsResponse = await axios.get(`${URL}${POSTS_ROUTE}/${params.id}/${COMMENTS_ROUTE}`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    post,
    comments,
    user
  };
};

export default useFetch;
