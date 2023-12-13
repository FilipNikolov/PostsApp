import React from 'react';
import styles from './PostDetails.module.scss';
import useFetch from '../../core/hooks/useFetch/useFetch';

function PostsDetails() {
  const { post, user, comments } = useFetch();

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

export default React.memo(PostsDetails);
