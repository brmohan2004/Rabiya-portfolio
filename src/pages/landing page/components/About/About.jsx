import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* 1. Left Section Header */}
        <div className="about-header">
          <h2 className="about-title">
            About me <ArrowUpRight size={24} className="about-title-icon" />
          </h2>
        </div>

        {/* 2. Center Description Paragraph */}
        <div className="about-content">
          <p className="about-text">
            I'm a freelance designer and developer based in India. I create clean, functional digital products and help brands bring their ideas to life.
          </p>
        </div>

        {/* 3. Right Action Button */}
        <div className="about-action">
          <a href="#contact" className="about-cv-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
