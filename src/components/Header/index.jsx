import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import avatar from './avatar.jpeg' ;

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={avatar} className="border border-3 rounded-circle" width="100" alt="Kiana Masqati avatar" />
                    <span className="navbar-text text-white align-middle pl-3">
                        Kiana Masqati <br/>Front-End Developer
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about" end>About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/portfolio" end>My Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/skills" end>My Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact" end>Contact Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Header;
