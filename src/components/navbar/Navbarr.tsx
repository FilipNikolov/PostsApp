import React from 'react';
import styles from './Navbar.module.scss';
import { HOME_ROUTE, POSTS_ROUTE } from '../../constant';

function Navbar() {
  return (
    <div className={`${styles.nav}`}>
      <span className={`${styles.nav_brand}`}>Posts App</span>
      <ul className={`${styles.nav_links}`}>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href={`${HOME_ROUTE}`}>
            Home
          </a>
        </li>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href={`${POSTS_ROUTE}`}>
            Posts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
