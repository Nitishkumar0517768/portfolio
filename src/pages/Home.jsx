import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hackathons from '../components/Hackathons';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certificates />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
