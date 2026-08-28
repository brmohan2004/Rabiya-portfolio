import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        // Hide header when the hero section ends
        setIsPastHero(heroBottom <= 60);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isPastHero ? 'is-hidden' : ''}`}>
      <a href="#hero" className="header-brand">
        <span>© Rabiya Aafreen J</span>
      </a>

      <nav className="header-nav-desktop">
        <a href="#contact" className="header-nav-link">Contact</a>
      </nav>

      <a href="#contact" className="header-menu-mobile" aria-label="Contact">
        <span className="header-menu-dot"></span>
        <span>Contact</span>
      </a>
    </header>
  );
};

export default Header;
