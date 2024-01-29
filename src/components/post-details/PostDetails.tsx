import React from 'react';
import styles from './PostDetails.module.scss';
import filteredData from '../../core/hooks/useFilteredData/useFilteredData';
import { Loading, Error } from '../loader&error';
import withComponentLogging from '../../core/hooks/customMessage/messageComponent';

const PostsDetails: React.FC = () => {
  const { filterData, isError, loading } = filteredData();
  
  if(loading){
    return <Loading/>;
  }
  if(isError){
    return <Error/>;
  }
  return (
    <div className={`${styles.main_box}`}>
      {filterData.map((item) => {
        return (
        <main className={`${styles.card_borders}`} key= {item.post.id}>
          <div className={`${styles.post_card}`} key={item.post.id}>
            <div className={`${styles.card_title}`}>
              <h3 className={`${styles.title}`}>
                {item.post.title} {item.post.id}
              </h3>
            </div>
            <section className={`${styles.card_body}`}>
              <span>
                {item.user?.name}
              </span>
              <span>
                {item.post.body}
              </span>
            </section>
            <div className={`${styles.all_comments}`}>
              <span className={`${styles.comments_title}`}>Comments:</span>
              <main>
                {item.comments.map((comment: any) => {return (
                  <section className={`${styles.comment}`} key={comment.id}>
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
                )})}
              </main>
            </div>
          </div>
        </main>
      )})}
    </div>
  );
}
PostsDetails.displayName = 'PostDetails';
export default withComponentLogging(PostsDetails, 'PostDetails');
