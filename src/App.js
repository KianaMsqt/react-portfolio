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
