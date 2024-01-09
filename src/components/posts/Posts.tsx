import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss';
import { POST_ROUTE } from '../../constant';
import useMergedData from '../../core/hooks/getMergedData/useMergedData';
import { Loading, Error } from '../loader&error';

const Posts = () => {
  const { mergedData: initialMergedData, isError, loading, handleChange } = useMergedData();
  const [mergedData, setMergedData] = useState(initialMergedData);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className={`${styles.main_box}`}>
      <div className={`${styles.search_bar}`}>
        <input
          className={`${styles.search_input}`}
          type="search"
          placeholder="Search Authors"
          onChange={handleChange}
        />
      </div>
      <object className={`${styles.card_borders}`}>
        {mergedData.map((item) => (
          <div className={`${styles.post_card}`} key={item.post.id}>
            <main className={`${styles.card_design}`}>
              <div className={`${styles.card_info}`}>
                <Link to={`${POST_ROUTE}${item.post.id}`}>
                  <div className={`${styles.card_title}`}>
                    <h3 className={`${styles.title}`}>
                      {item.post.title} {item.post.id}
                    </h3>
                  </div>
                  <section className={`${styles.card_body}`}>
                    <span>{item.user?.name}</span>
                    <span>{item.post.body}</span>
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
};
Posts.displayName = 'Post';
export default React.memo(Posts);
