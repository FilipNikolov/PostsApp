import React from 'react';
import styles from './Loader.module.scss';

const Loading = () => (
  <div className={`${styles.loader}`}>
    <div className={`${styles.spinner}`} />
  </div>
);

Loading.displayName = 'Loading';
export default React.memo(Loading);
