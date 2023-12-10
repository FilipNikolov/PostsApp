import React from 'react';
<<<<<<< HEAD
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={`${styles.nav}`}>
      <span className={`${styles.nav_brand}`}>Posts App</span>
      <ul className={`${styles.nav_links}`}>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href="/">
            Home{' '}
          </a>
        </li>
        <li className={`${styles.link_items}`}>
          <a className={`${styles.nav_path}`} href="/posts">
=======
import './Navbar.modules.scss';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light px-3 navigation">
      <span className="navbar-brand ">Posts App</span>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 px-5">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home{' '}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts">
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be
            Posts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
