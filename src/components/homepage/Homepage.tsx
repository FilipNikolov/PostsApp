import React from 'react';
import styles from './Homepage.module.scss';

function Homepage() {
  return( 
  <div className={`${styles.homepage}`}>
   <div  className={`${styles.welcome_box}`}> 
    <span className={`${styles.welcome_msg}`}>Welcome to Posts App!</span>
   </div>
  </div>
  );
}

export default Homepage;
