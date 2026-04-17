import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

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

const DynamicSEO = () => {
  const location = useLocation();
  
  const seoData = {
    '/': { title: 'Nitish kumar | Full stack developer', desc: 'Portfolio of Nitish Kumar, a passionate Full Stack Developer.' },
    '/about': { title: 'About Nitish Kumar - Full Stack Developer', desc: 'About me' },
    '/skills': { title: 'Skills - Nitish Kumar', desc: 'Skills - Nitish Kumar' },
    '/projects': { title: 'Projects - Nitish Kumar', desc: 'Projects - Nitish Kumar' },
    '/hackathons': { title: 'Hackathons - Nitish Kumar', desc: 'Hackathons - Nitish Kumar' },
    '/certificates': { title: 'Certificates - Nitish Kumar', desc: 'Certificates - Nitish Kumar' },
    '/education': { title: 'Education - Nitish Kumar', desc: 'Education - Nitish Kumar' },
    '/contact': { title: 'Contact - Nitish Kumar', desc: 'Contact - Nitish Kumar' }
  };

  const currentSEO = seoData[location.pathname] || seoData['/'];

  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.desc} />
    </Helmet>
  );
};

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
    <div className="bg-[#121212] min-h-screen font-inter text-[#EAEAEA] overflow-x-hidden transition-colors duration-300">
      <DynamicSEO />
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
