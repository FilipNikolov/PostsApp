import React, { useEffect, useState } from 'react';
import { FullPost, MergedData } from './types';
import { SingleComment, Post, User } from '../../api/types';
import useGetPostsQuery  from '../../api/useGetPostsQuery';
import useGetUsersQuery  from '../../api/useGetUsersQuery';
import useGetCommentsQuery  from '../../api/useGetCommentsQuery';

const useMergedData = (): MergedData => {
  const { allPosts, isLoadingPosts, isErrorPosts } = useGetPostsQuery();
  const { allUsers, isLoadingUsers, isErrorUsers } = useGetUsersQuery();
  const { allComments, isLoadingComments, isErrorComments } = useGetCommentsQuery();
  const [mergedData, setMergedData] = useState<FullPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (isLoadingPosts || isLoadingComments || isLoadingUsers) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (isErrorComments || isErrorPosts || isErrorUsers) {
      setError(true);
    } else {
      setError(false);
    }
    if (!isLoadingUsers && !isLoadingComments && !isLoadingPosts
       && !isErrorComments && !isErrorUsers && !isErrorPosts
    ) {
      const mergedData = getMergedData(allPosts, allUsers, allComments);
      setMergedData(mergedData);
    }
  }, [allPosts, allUsers, allComments, isLoadingUsers, isLoadingPosts,
    isLoadingComments, isErrorComments, isErrorPosts, isErrorUsers]);

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
    loading
  };
};

export default useMergedData;
