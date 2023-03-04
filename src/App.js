import React from 'react';
// Add react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
		<Header />

		<div>
            {/* Wrap Route elements in a Routes component */}
            <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                {/* Define a default route that will render the Home component */}
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>

		<section id="portfolio">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>My Portfolio</h2>
				<div className="row gx-4 justify-content-between">

					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							{/* <img className="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Portfolio Sample</h5>
								<p className="card-text">This is a portfolio website created only with HTML and CSS.</p>
								{/* <a href="https://kianamsqt.github.io/portfolio/" target="_blank" className="btn btn-dark mt-auto">Demo</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							{/* <img className="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Flashlight</h5>
								<p className="card-text">This is a flashlight effect following mouse cursor.</p>
								{/* <a href="https://kianamsqt.github.io/flashlight-effect/" target="_blank" className="btn btn-dark mt-auto">Demo</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							{/* <img className="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Front-EndEnd Triology</h5>
								<p className="card-text">This is pre-work challenge of Front-EndEnd Triology bootcamp.</p>
								{/* <a href="https://kianamsqt.github.io/prework-study-guide/" target="_blank" className="btn btn-dark mt-auto">Demo</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							{/* <img className="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Module One</h5>
								<p className="card-text">This is my work on module one of the bootcamp.</p>
								{/* <a href="https://kianamsqt.github.io/module-1-challenge/" target="_blank" className="btn btn-dark mt-auto">Demo</a> */}
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
		</section>

		<section id="skills" className="bg-dark text-white">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>My Skills</h2>
				<div className="row gx-4 justify-content-between">
					<div className="col-lg-4 col-md-6 mt-4">
						HTML
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						CSS
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						Javascript
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						JQuery
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						Bootstrap
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						React.js
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

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
