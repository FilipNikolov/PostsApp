import React from 'react';
import messageComponent from '../../core/hooks/useCustomMessage/messageComponent';
import styles from './Homepage.module.scss';

const Homepage = () =>{
  return( 
  <div className={`${styles.homepage}`}>
    <span className={`${styles.welcome_msg}`}>Welcome to Posts App!</span>
  </div>
  );
}

export default messageComponent(Homepage, 'Homepage');
