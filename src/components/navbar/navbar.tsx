import React from 'react';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={`${styles.nav}`}>
      <span className={`${styles.nav_brand}`}>Posts App</span>
      <ul className={`${styles.nav_links}`}>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href="/">
            Home
          </a>
        </li>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href="/posts">
            Posts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
