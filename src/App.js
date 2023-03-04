import React from 'react';
// Add react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
		<Header />

		{/* Wrap Route elements in a Routes component */}
		<Routes>
			{/* Define routes using the Route component to render different page components at different paths */}
			{/* Define a default route that will render the Home component */}
			<Route path="/" element={<About />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>

		<section id="contact">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>Get In Touch</h2>
				<p className="py-5">Contact form is <strong>disabled</strong> right now. Thank you for your patience.</p>
				<form>
					<fieldset disabled>
						<div className="form-group">
							<label htmlFor="email">Your Email</label>
							<input type="text" id="email" className="form-control" placeholder="email@domain.com" />
						</div>
						<div className="form-group">
							<label htmlFor="name">Your Name</label>
							<input type="text" id="name" className="form-control" placeholder="John Smith" />
						</div>
						<div className="form-group">
							<label htmlFor="message">Write your message</label>
							<textarea id="message" className="form-control"></textarea>
						</div>
					<button type="submit" className="btn btn-dark">Submit</button>
					</fieldset>
				</form>
			</div>
		</section>

		<footer className="bg-dark text-white">
			<div className="container mt-5 mb-5 pt-5">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item"><a href="#about" className="nav-link text-white px-2">About</a></li>
					<li className="nav-item"><a href="#portfolio" className="nav-link text-white px-2">Portfolio</a></li>
					<li className="nav-item"><a href="#skills" className="nav-link text-white px-2">Skills</a></li>
					<li className="nav-item"><a href="#contact" className="nav-link text-white px-2">Contact</a></li>
				</ul>
				
				{/* <ul className="nav social justify-content-center">
					<li className="nav-item mx-3"><a href="#" target="_blank" className="btn btn-dark text-white px-2">GitHub</a></li>
					<li className="nav-item mx-3"><a href="#" target="_blank" className="btn btn-dark text-white px-2">Linkedin</a></li>
					<li className="nav-item mx-3"><a href="#" target="_blank" className="btn btn-dark text-white px-2">Twitter</a></li>
				</ul> */}

			</div>
			<p className="text-center text-white py-3 copy-right my-0">© 2023 Kiana Masqati</p>

		</footer>
        
    </Router>
  );
}

export default App;
