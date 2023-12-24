import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Navbar, Header } from '../navbar';
import styles from './Root.module.scss';

function RootLayout() {
  const { id } = useParams();
  const navbar = id ? <Header /> : <Navbar />;

  return (
    <div className={`${styles.root_layout}`}>
      {navbar}
      <Outlet />
    </div>
  );
}

export default RootLayout;
