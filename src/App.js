import React from 'react';
// Add react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
        <div class="container">
            {/* <a class="navbar-brand" href="#">
                <img src="images/avatar.jpeg" class="border border-3 rounded-circle" width="100" />
                <span class="navbar-text text-white align-middle pl-3">
                    Kiana Masqati <br/>Front-End Developer
                </span>
            </a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#portfolio">My Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#skills">My Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="jumbotron jumbotron-fluid" id="about">
        <div class="container">
            <h1 class="display-4 text-white">About Me</h1>
            <p class="lead">
                <span class="text-white">Product enthusiast with 7+ years of experience in working with agile teams. Skilled in Front-End development. Reliable team player and eager to learn product skills.</span>
                <ul>
                    <li class="text-white">Product Management Methodologies and Frameworks: Agile, Waterfall, Scrum</li>
                    <li class="text-white">Development Skills: HTML, CSS, Javascript, jQuery, Vue.js, Git, SCSS, Stylus, Mustache, Pug, WordPress</li>
                </ul>
            </p>
        </div>
    </div>

    <section id="portfolio">
        <div class="container mt-5 mb-5 pt-5 pb-5">
            <h2>My Portfolio</h2>
            <div class="row gx-4 justify-content-between">

                <div class="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="card">
                        {/* <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Portfolio Sample</h5>
                            <p class="card-text">This is a portfolio website created only with HTML and CSS.</p>
                            {/* <a href="https://kianamsqt.github.io/portfolio/" target="_blank" class="btn btn-dark mt-auto">Demo</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="card">
                        {/* <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Flashlight</h5>
                            <p class="card-text">This is a flashlight effect following mouse cursor.</p>
                            {/* <a href="https://kianamsqt.github.io/flashlight-effect/" target="_blank" class="btn btn-dark mt-auto">Demo</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="card">
                        {/* <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Front-EndEnd Triology</h5>
                            <p class="card-text">This is pre-work challenge of Front-EndEnd Triology bootcamp.</p>
                            {/* <a href="https://kianamsqt.github.io/prework-study-guide/" target="_blank" class="btn btn-dark mt-auto">Demo</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
                    <div class="card">
                        {/* <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap" /> */}
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Module One</h5>
                            <p class="card-text">This is my work on module one of the bootcamp.</p>
                            {/* <a href="https://kianamsqt.github.io/module-1-challenge/" target="_blank" class="btn btn-dark mt-auto">Demo</a> */}
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    </section>

    <section id="skills" class="bg-dark text-white">
        <div class="container mt-5 mb-5 pt-5 pb-5">
            <h2>My Skills</h2>
            <div class="row gx-4 justify-content-between">
                <div class="col-lg-4 col-md-6 mt-4">
                    HTML
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    CSS
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    Javascript
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    JQuery
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    Bootstrap
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    React.js
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container mt-5 mb-5 pt-5 pb-5">
            <h2>Get In Touch</h2>
            <p class="py-5">Contact form is <strong>disabled</strong> right now. Thank you for your patience.</p>
            <form>
                <fieldset disabled>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="text" id="email" class="form-control" placeholder="email@domain.com" />
                    </div>
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" class="form-control" placeholder="John Smith" />
                    </div>
                    <div class="form-group">
                        <label for="message">Write your message</label>
                        <textarea id="message" class="form-control"></textarea>
                    </div>
                  <button type="submit" class="btn btn-dark">Submit</button>
                </fieldset>
            </form>
        </div>
    </section>

    <footer class="bg-dark text-white">
        <div class="container mt-5 mb-5 pt-5">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#about" class="nav-link text-white px-2">About</a></li>
                <li class="nav-item"><a href="#portfolio" class="nav-link text-white px-2">Portfolio</a></li>
                <li class="nav-item"><a href="#skills" class="nav-link text-white px-2">Skills</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link text-white px-2">Contact</a></li>
            </ul>
            
            {/* <ul class="nav social justify-content-center">
                <li class="nav-item mx-3"><a href="#" target="_blank" class="btn btn-dark text-white px-2">GitHub</a></li>
                <li class="nav-item mx-3"><a href="#" target="_blank" class="btn btn-dark text-white px-2">Linkedin</a></li>
                <li class="nav-item mx-3"><a href="#" target="_blank" class="btn btn-dark text-white px-2">Twitter</a></li>
            </ul> */}

        </div>
        <p class="text-center text-white py-3 copy-right my-0">© 2023 Kiana Masqati</p>

    </footer>
        <Header />
        <div>
            {/* Wrap Route elements in a Routes component */}
            <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                {/* Define a default route that will render the Home component */}
                <Route path="/" element={<Home />} />
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
