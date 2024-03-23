import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li className="homeButton">
          <Link to="/">Home</Link>
        </li>
        <li className="signInButton">
          <Link to="/signIn">Sign in</Link>
        </li>
        <li className="hours">
          Hours
        </li>
        <li className="events">
          Events
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
