import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
        <footer className="bg-dark text-white">
			<div className="container mt-5 mb-5 pt-5">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
                        <NavLink className="nav-link text-white px-2" to="/" end>About Me</NavLink>
                    </li>
					<li className="nav-item">
                        <NavLink className="nav-link text-white px-2" to="/portfolio" end>My Portfolio</NavLink>
                    </li>
					<li className="nav-item">
                        <NavLink className="nav-link text-white px-2" to="/skills" end>My Skills</NavLink>
                    </li>
					<li className="nav-item">
                        <NavLink className="nav-link text-white px-2" to="/contact" end>Contact Me</NavLink>
                    </li>
				</ul>
				
				<ul className="nav social justify-content-center">
					<li className="nav-item mx-3"><a href="https://github.com/KianaMsqt" target="_blank" rel="noreferrer" className="btn btn-dark text-white px-2">GitHub</a></li>
					<li className="nav-item mx-3"><a href="https://www.linkedin.com/in/kiana-masqati/" target="_blank" rel="noreferrer" className="btn btn-dark text-white px-2">Linkedin</a></li>
					<li className="nav-item mx-3"><a href="https://twitter.com/KianaMsqt" target="_blank" rel="noreferrer" className="btn btn-dark text-white px-2">Twitter</a></li>
				</ul>

			</div>
			<p className="text-center text-white py-3 copy-right my-0">© 2023 Kiana Masqati</p>

		</footer>
    </>
  );
}

export default Footer;
