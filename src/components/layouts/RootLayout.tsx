import React, {useMemo } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Navbar, Header } from '../navbar';
import styles from './Root.module.scss';

const RootLayout = () => {
  const { id } = useParams();
  const navbar = useMemo(() => (id ? <Header /> : <Navbar />),[id]);

  return (
    <div className={`${styles.root_layout}`}>
      {navbar}
      <Outlet />
    </div>
  );
  };

RootLayout.displayName = 'RootLayout';
export default React.memo(RootLayout);

