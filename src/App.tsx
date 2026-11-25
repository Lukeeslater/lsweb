import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 112;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 80);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Projects featured />
    </>
  );
}

function AboutPage() {
  return (
    <div className="pt-8">
      <About />
      <Skills />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <ScrollManager />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<div className="pt-8"><Projects /></div>} />
            <Route path="/leadership" element={<div className="pt-8"><Leadership /></div>} />
            <Route path="/contact" element={<div className="pt-8"><Contact /></div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
