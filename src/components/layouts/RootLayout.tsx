import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';
import styles from './Root.module.scss';

function RootLayout() {
  return (
    <div className={`${styles.root_layout}`}>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
