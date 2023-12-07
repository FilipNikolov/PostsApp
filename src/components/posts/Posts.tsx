import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetchData();
    // console.log(`${message} Posts `);
  }, []);

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
    <div className="container">
      <div className="navbar mt-3 d-flex justify-content-center">
        <input className="input" type="search" placeholder="Search People" onChange={handleChange} />
      </div>
      <object>
        {mergedData.map((item) => (
          <div className="container col-md-12">
            <main className="card mt-5">
              <div className={`${styles.card_body} ${styles.post_card}`}>
                <Link to={`/post/${item.post.id}`}>
                  <section key={item.post.id}>
                    <h3>
                      {item.post.title} {item.post.id}
                    </h3>
                    <hr />
                    <span>
                      <strong>User: </strong>
                      {item.user?.name}
                    </span>
                    <br />
                    <span>
                      <strong>Body: </strong>
                      {item.post.body}
                    </span>
                  </section>
                </Link>
                <div id="comments">
                  <main>
                    {item.comments.map((comment: any) => (
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
export default Posts;
