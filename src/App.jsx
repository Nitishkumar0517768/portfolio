import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

// Section components (for direct access)
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('selectedTheme') || 'dark');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  return (
    <div className="bg-[#E5E7EB] dark:bg-[#0a0a0a] min-h-screen font-inter text-[#0a0a0a] dark:text-[#E5E7EB] overflow-x-hidden transition-colors duration-300">
      <ScrollToTop />
      <Loader />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
