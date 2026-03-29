import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Certificates from './components/Certificates';
import Education from './components/Education';

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
      <Loader />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
