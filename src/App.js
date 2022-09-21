// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "animate.css/animate.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={About} />
          <Route path="/Projects" element={Projects} />
          <Route path="/Contact" element={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
