import React, { useEffect, useState, useMemo } from 'react';
import { FullPost, MergedData } from './types';
import useGetPostsQuery  from '../../api/allPosts/useGetPostsQuery';
import useGetUsersQuery  from '../../api/allUsers/useGetUsersQuery';
import useGetCommentsQuery  from '../../api/allComments/useGetCommentsQuery';

const useMergedData = (): MergedData => {
  const { allPosts, isLoadingPosts, isErrorPosts } = useGetPostsQuery();
  const { allUsers, isLoadingUsers, isErrorUsers } = useGetUsersQuery();
  const { allComments, isLoadingComments, isErrorComments } = useGetCommentsQuery();
  const [mergedData, setMergedData] = useState<FullPost[]>([]);
  const isError = isErrorComments || isErrorPosts || isErrorUsers;
  const loading = isLoadingComments || isLoadingPosts ||isLoadingUsers;

  useEffect(()=>{
  if(!isError || !loading) getMergedData();
  },[loading, isError])

  const getMergedData = () : FullPost[] => {
    const all: FullPost[] = allPosts?.map((post) => {
      const postUser= allUsers?.find((user)=> user.id === post.userId);
      const postComments = allComments?.filter((comment) => post.id === comment.postId);
      const fullPost: FullPost = {
          post, 
          user:postUser,
          comments:postComments,
      };
      return fullPost;
  });
  setMergedData(all);
  return all;
};

return {
  mergedData,
  isError,
  loading
};
};
  
export default useMergedData;


