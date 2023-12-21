import React, { useEffect, useState } from 'react';
import { FullPost, MergedData } from './types';
import { SingleComment, Post, User } from '../../api/types';
import useGetPostsQuery  from '../../api/useGetPostsQuery';

const useMergedData = (): MergedData => {
  const { allPosts, allComments, allUsers, isError, isLoading } = useGetPostsQuery();
  const [mergedData, setMergedData] = useState<FullPost[]>([]);

  useEffect(() => {
    if (!isError && !isLoading) {
      const mergedData = getMergedData(allPosts, allUsers, allComments);
      setMergedData(mergedData);
    }
  }, [allPosts, allUsers, allComments, isLoading, isError]);

  const getMergedData = (posts: Post[], users: User[], comments: SingleComment[]):FullPost[] => {
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
    mergedData,
    isError,
    isLoading
  };
};

export default useMergedData;
