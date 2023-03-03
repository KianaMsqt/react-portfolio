import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <NavLink to="/" end>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/about" end>About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/projects" end>Projects</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/contact" end>Contact</NavLink>
        </li>
    </ul>
  );
}

export default Header;
