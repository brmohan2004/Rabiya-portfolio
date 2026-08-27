import React, { useState, useEffect } from 'react';
import { Globe, ArrowDown, ArrowUp } from 'lucide-react';
import profileImg from '../../../../assets/rabiya photo (2).png';
import './Hero.css';

const Hero = () => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      {/* 1. Left Location Pill Badge */}
      <div className="hero-location-badge">
        <div className="hero-location-text">
          Located <br />
          in <br />
          India
        </div>
        <div className="hero-globe-icon-box">
          <Globe size={24} color="#ffffff" strokeWidth={1.5} />
        </div>
      </div>

      {/* 2. Right Intro Subtitle & Custom Down-Right Arrow */}
      <div className="hero-intro-right">
        <svg className="hero-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <div className="hero-role-title">
          AutoCAD Draftsman <br />
          & Façade Designer
        </div>
      </div>

      {/* 3. Center Studio Subject Photo */}
      <div className="hero-subject-container">
        <img 
          src={profileImg} 
          alt="Rabiya - AutoCAD Draftsman & Façade Designer" 
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
          <span className="hero-giant-name">Rabiya Façade Designer —</span>
          <span className="hero-giant-name">AutoCAD Draftsman —</span>
          <span className="hero-giant-name">Civil Engineering —</span>
          <span className="hero-giant-name">Rabiya Façade Designer —</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
