import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [selectedExp, setSelectedExp] = useState(null);

  const experienceData = [
    {
      id: 1,
      period: 'Jan 2026 – Present',
      role: 'FACADE DESIGNER',
      company: 'Dubai Glass Industry',
      location: 'Dubai, UAE',
      summary: 'Designed façade systems including curtain walls, glazing, and cladding with precise AutoCAD & Revit shop drawings.',
      details: [
        'Designed façade systems including curtain walls, glazing, and cladding',
        'Developed precise shop drawings using AutoCAD & Revit',
        'Coordinated with engineering and site teams for smooth execution',
        'Reduced design errors through accurate detailing and coordination',
      ],
      skills: ['AutoCAD', 'Revit', 'Curtain Wall', 'Glazing', 'Cladding', 'Shop Drawings'],
    },
    {
      id: 2,
      period: 'Jul 2025 – Dec 2025',
      role: 'Logistics Coordinator',
      company: 'FR8 Logistics Pvt Ltd',
      location: 'India',
      summary: 'Achieved 95% on-time delivery while managing vendor operations, route optimization, and shipment tracking.',
      details: [
        'Achieved 95% on-time delivery',
        'Managed vendors and logistics operations',
        'Managed relationships with transport vendors',
        'Optimized routes and schedules to improve efficiency and cost-effectiveness',
        'Ensured compliance with company policies and transportation regulations',
        'Responded to customer queries and provided real-time shipment updates',
        'Monitored shipment status and resolved delays or operational issues',
      ],
      skills: ['Logistics', 'Vendor Management', 'Route Optimization', 'Operations', 'Compliance'],
    },
    {
      id: 3,
      period: '2017 – 2021',
      role: 'CADD Designer',
      company: 'Chennai Safety Doors',
      location: 'Chennai, India',
      summary: 'Prepared detailed 2D shop drawings, fabrication layouts, and material BOQ take-offs for glass & aluminium components.',
      details: [
        'Prepared detailed 2D shop drawings and fabrication drawings using AutoCAD',
        'Created layout drawings and assembly details for manufacturing',
        'Delivered accurate drawings that minimized site errors and rework',
        'Performed material take-offs and BOQ preparation for glass and aluminium components',
      ],
      skills: ['AutoCAD', '2D Shop Drawings', 'Fabrication Details', 'BOQ & Take-offs', 'Aluminium Systems'],
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

  const openModal = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = '';
  };

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

                    <p className="roadmap-description">{item.summary}</p>

                    <div className="roadmap-card-bottom-row">
                      <button 
                        onClick={() => openModal(item)} 
                        className="roadmap-show-more-btn"
                      >
                        <span>Show More</span>
                        <ArrowUpRight size={16} />
                      </button>

                      <div className="roadmap-skills-list">
                        {item.skills.slice(0, 3).map((skill, sIdx) => (
                          <span key={sIdx} className="roadmap-skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience Details Popup Modal */}
      {selectedExp && (
        <div className="exp-modal-overlay" onClick={closeModal}>
          <div className="exp-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="exp-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="exp-modal-header">
              <div className="exp-modal-icon-box">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="exp-modal-title">{selectedExp.role}</h3>
                <div className="exp-modal-subtitle">
                  <span className="exp-modal-company">{selectedExp.company}</span>
                  <span className="exp-modal-dot">•</span>
                  <span className="exp-modal-period">{selectedExp.period}</span>
                </div>
              </div>
            </div>

            {/* Location Tag */}
            <div className="exp-modal-location-tag">
              <MapPin size={14} />
              <span>{selectedExp.location}</span>
            </div>

            {/* Bullet Points List */}
            <div className="exp-modal-body">
              <h4 className="exp-modal-section-title">Key Responsibilities & Achievements:</h4>
              <ul className="exp-modal-bullet-list">
                {selectedExp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="exp-modal-bullet-item">
                    <CheckCircle2 size={16} className="exp-modal-check-icon" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Badges */}
            <div className="exp-modal-footer">
              <h4 className="exp-modal-section-title">Core Skills Used:</h4>
              <div className="exp-modal-skills-grid">
                {selectedExp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="exp-modal-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
