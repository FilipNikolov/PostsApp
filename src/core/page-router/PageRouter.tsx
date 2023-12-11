import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Homepage } from '../../components/homepage';
import RootLayout from '../../components/layouts/RootLayout';
import PostDetails from '../../components/post-details/PostDetails';
import Posts from '../../components/posts/Posts';
import { POSTS_ROUTE } from '../../constant';

const PageRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path={`/${POSTS_ROUTE}`} element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default PageRouter;
