import React from 'react';
// Add react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/Projects/ProjectDetails';

  
function App() {
  return (
    <Router basename="/react-portfolio">
		<Header />

		{/* Wrap Route elements in a Routes component */}
		<Routes>
			{/* Define routes using the Route component to render different page components at different paths */}
			{/* Define a default route that will render the Home component */}
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projects/:id" element={<ProjectDetails />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/contact" element={<Contact />} />
			{/* Catch all other routes that don't match any of the defined routes and redirect them to the Home component. */}
			<Route path="*" element={<Home />} />
		</Routes>

		<Footer />
    </Router>
  );
}

export default App;
