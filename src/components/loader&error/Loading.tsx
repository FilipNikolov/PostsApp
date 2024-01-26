import React from 'react';
import styles from './Loader.module.scss';

const Loading = () => {
  return (
  <div className={`${styles.loader}`}>
    <div className={`${styles.spinner}`} />
  </div>
)};

export default Loading;
