import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const experienceData = [
    {
      id: 1,
      period: '2023 — Present',
      role: 'Lead Full-Stack Developer & Designer',
      company: 'Independent Studio',
      location: 'Remote / Global',
      description: 'Spearheading end-to-end web architectures, high-performance web applications, and custom design systems for international clients.',
      skills: ['React', 'Next.js', 'Node.js', 'UI/UX Design', 'TailwindCSS', 'Framer Motion'],
    },
    {
      id: 2,
      period: '2022 — 2023',
      role: 'Senior Frontend Engineer',
      company: 'Nexus Tech Labs',
      location: 'India',
      description: 'Engineered responsive web portals, modular component libraries, and optimized frontend performance achieving 98+ Lighthouse scores.',
      skills: ['React.js', 'JavaScript (ES6+)', 'CSS3/Sass', 'REST APIs', 'Vite'],
    },
    {
      id: 3,
      period: '2021 — 2022',
      role: 'UI/UX Designer & Web Developer',
      company: 'PixelCraft Digital',
      location: 'India',
      description: 'Designed interactive wireframes and high-fidelity prototypes, transforming brand concepts into engaging pixel-perfect web experiences.',
      skills: ['Figma', 'UI Design', 'HTML5/CSS3', 'JavaScript', 'Responsive Design'],
    },
    {
      id: 4,
      period: '2020 — 2021',
      role: 'Frontend Developer',
      company: 'CodeSphere Solutions',
      location: 'India',
      description: 'Collaborated with cross-functional teams to build clean client dashboards, landing pages, and interactive UI widgets.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Bootstrap'],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const totalScrollableDistance = sectionHeight - windowHeight;
      const currentScroll = -sectionRect.top;

      if (totalScrollableDistance > 0 && currentScroll >= 0 && currentScroll <= totalScrollableDistance) {
        const progress = currentScroll / totalScrollableDistance;
        setScrollProgress(progress);

        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxTranslate = Math.max(0, trackWidth - viewportWidth);
        setTranslateX(progress * maxTranslate);
      } else if (currentScroll < 0) {
        setScrollProgress(0);
        setTranslateX(0);
      } else if (totalScrollableDistance > 0 && currentScroll > totalScrollableDistance) {
        setScrollProgress(1);
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxTranslate = Math.max(0, trackWidth - viewportWidth);
        setTranslateX(maxTranslate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-sticky-wrapper">
        {/* Header */}
        <div className="experience-header">
          <h2 className="experience-title">
            Experience <ArrowUpRight size={24} className="experience-title-icon" />
          </h2>
          <div className="experience-scroll-progress-badge">
            <span className="experience-progress-text">Timeline Progress</span>
            <div className="experience-progress-bar-bg">
              <div 
                className="experience-progress-bar-fill" 
                style={{ width: `${Math.round(scrollProgress * 100)}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Horizontal Moving Roadmap Track */}
        <div className="experience-track-container">
          <div 
            className="roadmap-horizontal-track" 
            ref={trackRef}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {/* Background Horizontal Connecting Line */}
            <div className="roadmap-horizontal-line-bg" />
            <div 
              className="roadmap-horizontal-line-progress" 
              style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Horizontal Nodes & Cards */}
            {experienceData.map((item, index) => {
              const isActive = scrollProgress >= (index / experienceData.length);

              return (
                <div key={item.id} className={`roadmap-h-card-wrapper ${isActive ? 'is-active' : ''}`}>
                  {/* Period Badge above node */}
                  <div className="roadmap-h-period">
                    <Calendar size={13} /> {item.period}
                  </div>

                  {/* Node Dot on horizontal line */}
                  <div className="roadmap-h-node">
                    <div className="roadmap-h-node-inner" />
                  </div>

                  {/* Horizontal Card */}
                  <div className="roadmap-h-card">
                    <div className="roadmap-card-header">
                      <div>
                        <h3 className="roadmap-role">{item.role}</h3>
                        <div className="roadmap-company-info">
                          <span className="roadmap-company">{item.company}</span>
                          <span className="roadmap-dot">•</span>
                          <span className="roadmap-location">
                            <MapPin size={13} /> {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="roadmap-icon-badge">
                        <Briefcase size={18} />
                      </div>
                    </div>

                    <p className="roadmap-description">{item.description}</p>

                    <div className="roadmap-skills-list">
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="roadmap-skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
