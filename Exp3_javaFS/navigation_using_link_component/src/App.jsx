import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the Home page of our SPA!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This page gives information about our application.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>Get in touch with us at contact@example.com.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link">Contact</NavLink>
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
