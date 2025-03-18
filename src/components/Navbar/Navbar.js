import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar pd-lr">
      <div className="navbar-logo">
        <Link to="/">Closers Images</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/gallery">캐릭터 일러스트</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
