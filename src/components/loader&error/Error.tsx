import React from 'react';
import styles from './Loader.module.scss';

const Error = () => {
  return (
  <div className={`${styles.error}`}>
    <span className={`${styles.error_msg}`}>Oops! Error fetching data!</span>
  </div>
)};

export default Error;
