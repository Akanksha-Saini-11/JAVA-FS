import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./pages/Home";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "15px" }}>Home</Link>
        <Link to="/about" style={{ margin: "15px" }}>About</Link>
        <Link to="/contact" style={{ margin: "15px" }}>Contact</Link>
      </nav>

      <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
