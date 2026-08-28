import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import profileImg from '../../../../assets/rabiya photo (2).png';
import anthaTechLogo from '../../../../assets/image copy 2.png';
import './Hero.css';

const Hero = () => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Turn into Scroll Up button as soon as user scrolls down past 80px
      setIsPastHero(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e) => {
    if (isPastHero) {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* 1. Left Brand Badge (Redirects to https://anthatech.me/) */}
      <a
        href="https://anthatech.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-location-badge hero-brand-link-badge"
        title="Developed by Antha Tech"
      >
        <div className="hero-location-text">
          Developed <br />
          by <br />
          Antha Tech
        </div>
        <div className="hero-globe-icon-box hero-logo-icon-box">
          <img src={anthaTechLogo} alt="Antha Tech Logo" className="hero-antha-logo-img" />
        </div>
      </a>

      {/* 2. Right Intro Subtitle & Custom Down-Right Arrow */}
      <div className="hero-intro-right">
        <svg className="hero-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <div className="hero-role-title">
          Façade Designer <br />
          & CADD <br />
          Specialist
        </div>
      </div>

      {/* 3. Center Studio Subject Photo */}
      <div className="hero-subject-container">
        <img
          src={profileImg}
          alt="Rabiya Aafreen J - Facade Designer & Developer"
          className="hero-subject-img"
        />
      </div>

      {/* 4. Text-less Glass Scroll Down / Up Indicator */}
      <a
        href={isPastHero ? "#hero" : "#about"}
        onClick={handleScrollClick}
        className={`hero-scroll-indicator ${isPastHero ? 'is-past-hero' : ''}`}
        aria-label={isPastHero ? "Scroll up to hero" : "Scroll down to about"}
      >
        <div className="scroll-indicator-circle">
          {isPastHero ? (
            <ArrowUp size={22} className="scroll-arrow-anim-up" />
          ) : (
            <ArrowDown size={22} className="scroll-arrow-anim" />
          )}
        </div>
      </a>

      {/* 5. Giant Bottom Marquee Typography */}
      <div className="hero-bottom-marquee">
        <div className="hero-marquee-track">
          <span className="hero-giant-name">Rabiya Aafreen J —</span>
          <span className="hero-giant-name">Rabiya Aafreen J —</span>
          <span className="hero-giant-name">Rabiya Aafreen J —</span>
          <span className="hero-giant-name">Rabiya Aafreen J —</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
