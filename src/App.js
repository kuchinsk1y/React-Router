import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'; // Для стилів

// Компоненти
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className="nav-item" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
