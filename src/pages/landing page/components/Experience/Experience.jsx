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
      role: 'Senior Façade Draftsman',
      company: 'AlumGlaze Systems',
      location: 'India / UAE Projects',
      description: 'Head draftsman for unitized curtain wall systems, spider glazing canopy structures, and high-rise glass tower shop drawing packages.',
      skills: ['AutoCAD 2D/3D', 'Curtain Wall', 'Revit BIM', 'Extrusion Profiles', 'BOQ Estimation'],
    },
    {
      id: 2,
      period: '2022 — 2023',
      role: 'AutoCAD Civil Engineer',
      company: 'Nexus Infra Tech',
      location: 'India',
      description: 'Engineered structural RCC drawings, column schedules, raft foundation layouts, and municipal submission CAD blueprints for commercial developments.',
      skills: ['AutoCAD Civil 3D', 'RCC Detailing', 'Bar Bending Schedules', 'Site Elevation'],
    },
    {
      id: 3,
      period: '2021 — 2022',
      role: 'Structural CAD Detailer',
      company: 'BuildSpace Engineers',
      location: 'India',
      description: 'Produced fabrication shop drawings for steel structures, aluminum cladding (ACP), and structural glass bracket connections.',
      skills: ['AutoCAD 2D', 'Steel Connections', 'ACP Cladding', 'Shop Drawings'],
    },
    {
      id: 4,
      period: '2020 — 2021',
      role: 'Junior Civil Draftsman',
      company: 'Horizon Engineering',
      location: 'India',
      description: 'Assisted senior civil engineers with 2D architectural floor plans, elevation sections, and site survey layout CAD drafting.',
      skills: ['AutoCAD', 'Architectural Drafting', 'Surveying', 'Building Codes'],
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
