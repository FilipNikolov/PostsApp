import React from 'react';
import './Navbar.modules.scss';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light px-3 navigation">
      <span className="navbar-brand ">Posts App</span>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 px-5">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home{' '}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts">
            Posts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
