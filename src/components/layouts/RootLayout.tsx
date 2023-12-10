import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import { Navbar } from '../navbar';
import styles from './Root.module.scss';
=======
import Navbar from '../navbar/navbar';
import './Root.modules.scss';
>>>>>>> 29cf3873832a9cc1c3e443731493c14c9a5af2be

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
