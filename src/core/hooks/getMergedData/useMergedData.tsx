import React, { useEffect, useState, useMemo, useCallback } from 'react';
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

  const getMergedData = useCallback((): FullPost[] => {
    const all: FullPost[] = allPosts?.reduce((result, post) => {
      const postUser = allUsers?.find((user) => user.id === post.userId);
      const postComments = allComments?.filter((comment) => post.id === comment.postId);
      const fullPost: FullPost = {
        post,
        user: postUser,
        comments: postComments,
      };
      result.push(fullPost);
      return result;
    }, [] as FullPost[]);
    setMergedData(all);
    return all;
  }, [allPosts, allUsers, allComments]);

useEffect(()=>{
  if(!isError || !loading) getMergedData();
  },[loading, isError]);

const result = useMemo(() => ({
  mergedData,
  isError,
  loading,
}),[mergedData,isError,loading]);

return result;
};
export default useMergedData;



