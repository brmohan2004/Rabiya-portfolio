import React from 'react';

import Sidebar from '../../common/Sidebar/Sidebar';
import MobileNavbar from '../../common/MobileNavbar/MobileNavbar';
import Header from '../../common/Header/Header';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Sidebar />
      <MobileNavbar />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default LandingPage;
