import { useCallback, useState } from 'react';
import { FullPost } from './types';
import useGetPostsQuery  from '../../api/posts/allPosts/useGetPostsQuery';
import useGetUsersQuery  from '../../api/users/allUsers/useGetUsersQuery';
import useGetCommentsQuery  from '../../api/comments/allComments/useGetCommentsQuery';

const getMergedData = () => {
    const { allPosts, isLoadingPosts, isErrorPosts } = useGetPostsQuery();
    const { allUsers, isLoadingUsers, isErrorUsers } = useGetUsersQuery();
    const { allComments, isLoadingComments, isErrorComments } = useGetCommentsQuery();
    const [mergedData, setMergeData] = useState<FullPost[]>([]);
    const isError = isErrorComments || isErrorPosts || isErrorUsers;
    const loading = isLoadingComments || isLoadingPosts ||isLoadingUsers;
  
const data = useCallback((): FullPost[] => {
    const all: FullPost[] = allPosts?.reduce((result, post) => {
      const postUser = allUsers?.find((user) => {return user.id === post.userId});
      const postComments = allComments?.filter((comment) => {return post.id === comment.postId});
      const fullPost: FullPost = {
        post,
        user: postUser,
        comments: postComments,
      };
      result.push(fullPost);
      return result;
    }, [] as FullPost[]);
    setMergeData(all);
    return all;
},[allComments,allPosts,allUsers]);
   
return {
        mergedData,
        completePost: data,
        loading,
        isError
    }
};

export default getMergedData;