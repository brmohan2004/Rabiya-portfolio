import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if user is in the Contact section -> Set all sidebar buttons inactive
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const contactTop = contactEl.getBoundingClientRect().top;
        if (contactTop < window.innerHeight * 0.75) {
          setActiveSection(''); // All buttons inactive (no text name shown)
          return;
        }
      }

      // 2. Section scroll tracker
      const sections = ['hero', 'about', 'projects', 'education', 'experience', 'skills'];

      if (window.scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      const scrollPosition = window.scrollY + 250;
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
      setActiveSection(currentFound);
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
    <aside className="desktop-floating-sidebar" aria-label="Desktop Section Navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;
        return (
          <div key={item.id} className="sidebar-item-slot">
            <a
              href={`#${item.id}`}
              className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              title={item.label}
            >
              {isActive && <span className="sidebar-nav-label">{item.label}</span>}
              <div className="sidebar-icon-box">
                <IconComponent size={20} strokeWidth={2} />
              </div>
            </a>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
