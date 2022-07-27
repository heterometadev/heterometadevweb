import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home } from './components/Home';
import { Home2 } from './components/Home2';
import { Home3 } from "./components/Home3";
import { Home4 } from "./components/Home4";
import { Home5 } from "./components/Home5";

const Animated = () => {
  const location = useLocation();
  return (
        // New commit for test
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/2" element={<Home2/> }></Route>
        <Route path="/3" element={<Home3/> }></Route>
        <Route path="/4" element={<Home4/> }></Route>
        <Route path="/5" element={<Home5/> }></Route>
      </Routes>
  );
};
function App() {
  return (
    <>
      <Router>
        <Animated />
      </Router>
    </>
  );
}

export default App;
