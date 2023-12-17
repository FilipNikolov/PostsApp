import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Navbar, Header } from '../navbar';
import styles from './Root.module.scss';

function RootLayout() {
  const params = useParams();
  const navbar = params.id ? <Header /> : <Navbar />;

  return (
    <div className={`${styles.root_layout}`}>
      {navbar}
      <Outlet />
    </div>
  );
}

export default RootLayout;
