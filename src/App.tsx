import React from "react";
import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider,
} from "react-router-dom";
import { POSTS_ROUTE } from "./constant";
import RootLayout from "./components/layouts/RootLayout";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";
import Homepage from "./components/homepage/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path={`/${POSTS_ROUTE}`} element={<Posts />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Route>,
  ),
);
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
