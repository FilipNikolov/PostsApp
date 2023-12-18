import React, { useEffect, useState } from 'react';
import { FullPost } from './types';
import usePostsData from '../posts/usePostsData';
import { Post } from '../posts/types';
import useUserData from '../users/useUserData';
import { User } from '../users/types';
import useCommentsData from '../comments/useCommentsData';
import { SingleComment } from '../comments/types';

const useMergedData = () => {
  const { allPosts } = usePostsData();
  const { allUsers } = useUserData();
  const { allComments } = useCommentsData();
  const [mergedData, setMergedData] = useState<FullPost[]>([]);

  useEffect(() => {
    const mergedData = getMergedData(allPosts, allUsers, allComments);
    setMergedData(mergedData);
  }, [allPosts, allUsers, allComments]);

  const getMergedData = (posts: Post[], users: User[], comments: SingleComment[]): FullPost[] => {
    const all: FullPost[] = posts.map((post) => {
      const postUser = users.find((user) => user.id === post.userId);
      const postComments = comments.filter((comment) => post.id === comment.postId);
      const fullPost: FullPost = {
        post,
        user: postUser,
        comments: postComments,
      };
      return fullPost;
    });
    return all;
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const data = getMergedData(allPosts, allUsers, allComments);
    const filterData = data.filter((item) => item.user?.name.toLowerCase().includes(e.currentTarget.value));
    setMergedData(filterData);
  };
  return {
    handleChange,
    mergedData
  };
};

export default useMergedData;
