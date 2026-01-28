import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our Single Page Application!</p>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This page tells you about our application.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>Get in touch with us at contact@example.com.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
