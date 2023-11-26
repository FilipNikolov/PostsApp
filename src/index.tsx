import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PostDetails from "./components/PostDetails";
import Posts from "./components/PostDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import PostsDetails from './components/PostDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
  <Routes>
    <Route path="" element={<Navigate to="/posts" />} />
    <Route path="/posts" element={<App/>}/>
    <Route path="/post/:id" Component={PostsDetails} element={<PostDetails/>}/>
   </Routes>
</Router>
);


