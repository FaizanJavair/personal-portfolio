import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatIDo from "./components/WhatIDo";
import HeroAlternate from "./components/HeroAlternate";
import Noise from "./components/Noise";
import Skills from "./components/Skills";
import AllProjects from "./components/AllProjects";
import NotFound from "./components/NotFound"; // 1. Import Here

const Home = () => (
  <main className="bg-transparent pt-0">
    <div className="w-full max-w-7xl mx-auto">
      <HeroAlternate />
    </div>

    <WhatIDo />

    <div className="w-full max-w-7xl mx-auto">
      <Skills />
      <Experience />
    </div>

    <Projects />

    <div className="w-full max-w-7xl mx-auto">
      <Contact />
    </div>
  </main>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navLinks = ["Home", "What I Do", "Career", "Projects", "Contact"];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen relative transition-colors duration-500">
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
          <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={16}
          />
        </div>

        <div className="relative z-10">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            navLinks={navLinks}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />

            {/* 2. Add the Catch-All Route here */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
