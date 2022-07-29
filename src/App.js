import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { HeteroVideo } from "./components/HeteroVideo";
import { Discover } from "./components/Discover";
import { WhatIsHeterometa } from "./components/DiscoverPages/WhatIsHeterometa";
import "bootstrap/dist/css/bootstrap.min.css";


const Animated = () => {
  const location = useLocation();
  return (
    // New commit for test
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />}></Route>
      <Route path="heterovideo" element={<HeteroVideo />}></Route>
      <Route path="discover" element={<Discover />}></Route>
      <Route path="discover/what-is-heterometa" element={<WhatIsHeterometa />}></Route>
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
