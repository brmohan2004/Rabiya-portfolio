import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <a href="#hero" className="header-brand">
        <span>© Code by Rabiya</span>
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
