import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import pMinDelay from 'p-min-delay';
import { Homepage } from '../../components/homepage';
import RootLayout from '../../components/layouts/RootLayout';
import { POSTS_ROUTE, POST_ROUTE_ID } from './constant-routes';
import Loading from '../../components/loader&error/Loading';

const LazyPosts = React.lazy(() => {return import('../../components/posts/Posts')});
const LazyPostDetails = React.lazy(() => {return pMinDelay(import('../../components/post-details/PostDetails'), 200)});

const PageRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route
          path={`${POSTS_ROUTE}`}
          element={(
            <React.Suspense fallback={<Loading />}>
              <LazyPosts />
            </React.Suspense>
      )}
        />
        <Route
          path={`${POST_ROUTE_ID}`}
          element={(
            <React.Suspense fallback={<Loading />}>
              <LazyPostDetails />
            </React.Suspense>
      )}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default PageRouter;
