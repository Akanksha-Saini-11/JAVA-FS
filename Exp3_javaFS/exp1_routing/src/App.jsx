import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Home page of the Single Page Application.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This page explains client-side routing using React Router.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>You can contact us through email or phone.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">SPA Routing</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
    </BrowserRouter>
  );
}

export default App;
