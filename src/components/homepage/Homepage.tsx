import React from 'react';
import styles from './Homepage.module.scss';

function Homepage() {
  return( 
  <div className={`${styles.homepage}`}>
    <span className={`${styles.welcome_msg}`}>Welcome to Posts App!</span>
  </div>
  );
}

export default Homepage;
