import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PostDetails.module.scss';
=======
import './PostDetails.modules.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
import { URL } from '../../config/index';
import { POSTS_ROUTE, USER_ROUTE, COMMENTS_ROUTE } from '../../constant';
import { User, Comment } from './types';
import { Post } from '../../core/hooks/posts/types';

function PostsDetails() {
  const [post, setPost] = useState<Post>({
    id: -1,
    title: '',
    body: '',
    userId: -1,
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User>({ name: '' });

  const params = useParams();

  const fetchData = async () => {
    try {
      const postRes = await axios.get(`${URL}/${POSTS_ROUTE}/${params.id}`);
      setPost(postRes.data);

      const userRes = await axios.get(`${URL}/${USER_ROUTE}/${postRes.data.userId}`);
      setUser(userRes.data);

      const commentsResponse = await axios.get(`${URL}/${POSTS_ROUTE}/${params.id}/${COMMENTS_ROUTE}`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
<<<<<<< HEAD
    console.log('Racno Hello from post details');
  }, []);

  return (
    <div className={`${styles.main_box}`}>
      <main className={`${styles.card_borders}`}>
        <div className={`${styles.post_card}`}>
          <div className={`${styles.card_title}`}>
            <h3 className={`${styles.title}`}>
              {post.title} {post.id}
            </h3>
          </div>
          <section className={`${styles.card_body}`}>
            <span>
              {user.name}
            </span>
            <span>
              {post.body}
            </span>
          </section>
          <div className={`${styles.all_comments}`}>
            <span className={`${styles.comments_title}`}>Comments:</span>
            <main>
              {comments.map((comment: any) => (
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
    console.log('Rachno Hello from post details');
  }, []);

  return (
    <div className="container col-md12">
      <main className="card mt-5 ">
        <div className="card-body post-card">
          <h3>
            {post.title} {post.id}
          </h3>
          <hr />
          <span>
            <strong>User: </strong>
            {user.name}{' '}
          </span>
          <br />
          <span>
            <strong>Body: </strong>
            {post.body}
          </span>

          <div className="comments">
            <main>
              {comments.map((comment: any) => (
                <section className="container px-10">
                  <main className="card mt-2">
                    <div className="card-body">
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
  );
}
PostsDetails.displayName = 'PostDetails';

export default React.memo(PostsDetails); // hoc
