import React, { useEffect, useState } from 'react';
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
          <div className={`${styles.post_card}`}>
            <main className={`${styles.card_design}`}>
              <div className={`${styles.card_info}`}>
                <Link to={`${POST_ROUTE}${item.post.id}`}>
                  <div className={`${styles.card_title}`}>
                    <h3 className={`${styles.title}`}>
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
export default React.memo(Posts);
