import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAtAbsoluteBottom, setIsAtAbsoluteBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if user is in Contact section -> set all buttons inactive
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const contactTop = contactEl.getBoundingClientRect().top;
        if (contactTop < window.innerHeight * 0.75) {
          setActiveSection('');
        }
      }

      // 2. Check if user is at the absolute bottom (past version text)
      const scrollBottom = window.innerHeight + window.scrollY;
      const absoluteBottomThreshold = document.documentElement.scrollHeight - 80;
      
      if (scrollBottom >= absoluteBottomThreshold) {
        setIsAtAbsoluteBottom(true);
      } else {
        setIsAtAbsoluteBottom(false);
      }

      const sections = ['hero', 'about', 'projects', 'education', 'experience', 'skills'];

      if (window.scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      const scrollPosition = window.scrollY + 200;
      let currentFound = 'hero';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight || 300;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentFound = section;
            break;
          }
        }
      }

      if (!contactEl || contactEl.getBoundingClientRect().top >= window.innerHeight * 0.75) {
        setActiveSection(currentFound);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Hero', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code2 },
  ];

  return (
    <nav className={`mobile-bottom-nav ${isAtAbsoluteBottom ? 'is-hidden-at-bottom' : ''}`}>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            title={item.label}
          >
            <div className="mobile-nav-icon-box">
              <IconComponent size={19} strokeWidth={2} />
            </div>
            {isActive && <span className="mobile-nav-label">{item.label}</span>}
          </a>
        );
      })}
    </nav>
  );
};

export default MobileNavbar;
