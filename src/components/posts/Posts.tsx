import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss';
import { FullPost } from './types';
import usePostsData from '../../core/hooks/posts/usePostsData';
import { Post } from '../../core/hooks/posts/types';
import useUserData from '../../core/hooks/users/useUserData';
import { User } from '../../core/hooks/users/types';
import useCommentsData from '../../core/hooks/comments/useCommentsData';
import { SingleComment } from '../../core/hooks/comments/types';
import { POST_ROUTE } from '../../constant';

function Posts() {
  const { allPosts } = usePostsData();
  const { allUsers } = useUserData();
  const { allComments } = useCommentsData();
  const [mergedData, setMergedData] = useState<FullPost[]>([]);

=======
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss';
import { URL } from '../../config/index';
import { USER_ROUTE, COMMENTS_ROUTE } from '../../constant';
import { User, SingleComment, FullPost } from './types';
import usePostsData from '../../core/hooks/posts/usePostsData';
import { Post } from '../../core/hooks/posts/types';

function Posts() {
  const { allPosts } = usePostsData();
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allComments, setAllComments] = useState<SingleComment[]>([]);
  const [mergedData, setMergedData] = useState<FullPost[]>([]);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get(`${URL}/${USER_ROUTE}`);
      setAllUsers(usersResponse.data);

      const commentsResponse = await axios.get(`${URL}/${COMMENTS_ROUTE}`);
      setAllComments(commentsResponse.data);

      const mergedData = getMergedData(allPosts, usersResponse.data, commentsResponse.data);
      setMergedData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
  useEffect(() => {
    const mergedData = getMergedData(allPosts, allUsers, allComments);
    setMergedData(mergedData);
  }, [allPosts, allUsers, allComments]);

  function getMergedData(posts: Post[], users: User[], comments: SingleComment[]): FullPost[] {
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
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const data = getMergedData(allPosts, allUsers, allComments);
    const filterData = data.filter((item) => item.user?.name.toLowerCase().includes(e.currentTarget.value));
    setMergedData(filterData);
  };

  return (
    <div className={`${styles.main_box}`}>
      <div className={`${styles.search_bar}`}>
        <input className={`${styles.search_input}`} type="search" placeholder="Search People" onChange={handleChange} />
      </div>
      <object className={`${styles.card_borders}`}>
        {mergedData.map((item) => (
<<<<<<< HEAD
          <div className={`${styles.post_card}`}>
            <main className={`${styles.card_design}`}>
              <div className={`${styles.card_info}`}>
                <Link to={`${POST_ROUTE}${item.post.id}`}>
                  <div className={`${styles.card_title}`}>
                    <h3 className={`${styles.title}`}>
=======
          <div className="container col-md-12">
            <main className="card mt-5">
              <div className={`${styles.card_body} ${styles.post_card}`}>
                <Link to={`/post/${item.post.id}`}>
                  <section key={item.post.id}>
                    <h3>
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
                      {item.post.title} {item.post.id}
                    </h3>
                  </div>
                  <section key={item.post.id} className={`${styles.card_body}`}>
                    <span>
                      {item.user?.name}
                    </span>
                    <span>
                      {item.post.body}
                    </span>
                  </section>
                </Link>
                <div className={`${styles.all_comments}`}>
                  <span className={`${styles.comments_title}`}>Comments:</span>
                  <main>
                    {item.comments.map((comment: any) => (
<<<<<<< HEAD
                      <section className={`${styles.comment}`}>
                        <main className={`${styles.comment_body}`}>
                          <p className={`${styles.comment_user}`}>
                            <strong>Email: </strong>
                            {comment.email}
                          </p>
                          <p>
                            <strong>Comment: </strong>
                            {comment.body}
                          </p>

=======
                      <section className="container px-10">
                        <main className="card mt-2">
                          <div className="card-body px-2">
                            <span>
                              <strong>Email: </strong>
                              {comment.email}
                            </span>
                            <p>
                              <strong>Comment: </strong>
                              {comment.body}
                            </p>
                          </div>
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
                        </main>
                      </section>
                    ))}
                  </main>
                </div>
              </div>
            </main>
          </div>
        ))}
      </object>
    </div>
  );
}
Posts.displayName = 'Post';
<<<<<<< HEAD
export default React.memo(Posts);
=======
export default Posts;
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
