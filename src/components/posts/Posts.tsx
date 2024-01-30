import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Posts.module.scss';
import { POST_ROUTE } from '../../core/route/constant-routes';
import { Loading, Error } from '../loader&error';
import messageComponent from '../../core/hooks/useCustomMessage/messageComponent';
import pagePagination from '../../core/hooks/usePostPagination&Search/pagination&search';

const Posts: React.FC = () => {
const {totalPages,currentData,currentPage,handlePageChange,handleChange,isError,loading} = pagePagination();

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
        {currentData.map((item) => {
          return (
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
          </div>
        )})}
      </object>
     <div className={`${styles.pagination_list}`}>
      <div className={`${styles.pagination}`}>
        {Array.from({ length: totalPages }, (_, index) => {return (
        <button
            key={index + 1}
            onClick={() => { return handlePageChange(index + 1); } }
            className={`${styles.page_button} 
            ${currentPage === index + 1 ? styles.active_page : ''}`}
            type='submit'
          >
            {index + 1}
          </button>
        )})}
      </div>
    </div>
    </div>
  );
};
Posts.displayName = 'Post';
export default messageComponent(Posts, 'Post');