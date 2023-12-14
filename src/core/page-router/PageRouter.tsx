import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Homepage } from '../../components/homepage';
import RootLayout from '../../components/layouts/RootLayout';
import { POSTS_ROUTE, POST_ROUTE_ID } from '../../constant';
import Loading from '../hooks/error&loader/Loading';

const LazyPosts = React.lazy(() => import('../../components/posts/Posts'));

const LazyPostDetails = React.lazy(() => Promise.all([
  import('../../components/post-details/PostDetails'),
  new Promise((resolve) => { setTimeout(resolve, 700); })
])
  .then(([moduleExports]) => moduleExports));

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
