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
            I am a specialized <strong>AutoCAD Draftsman & Façade Designer</strong> with a solid background in <strong>Civil Engineering</strong>. I specialize in unitized curtain walls, aluminum composite panel (ACP) cladding, structural glazing 2D shop drawings, and 3D architectural detailing.
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
