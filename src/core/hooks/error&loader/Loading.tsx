/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './Loader.module.scss';

const Loading = () => (
  <div className={`${styles.loader}`}>
    <div className={`${styles.spinner}`}></div>
  </div>
);

export default Loading;
