import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../../../common/ProjectCard/ProjectCard';
import { projectsData } from '../../../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* 1. Section Header */}
        <div className="projects-header">
          <h2 className="projects-title">
            Featured Projects <ArrowUpRight size={24} className="projects-title-icon" />
          </h2>
          <a href="#projects" className="projects-view-all">
            View all projects <ArrowUpRight size={18} />
          </a>
        </div>

        {/* 2. Projects Single-Row Horizontally Scrollable Grid */}
        <div 
          className="projects-grid" 
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {projectsData.map((project, idx) => (
            <div key={project.id} className="projects-grid-item">
              <ProjectCard
                id={project.id}
                number={String(idx + 1).padStart(2, '0')}
                title={project.title}
                category={project.category}
                image={project.image}
              />
            </div>
          ))}
        </div>

        {/* 3. Mobile Horizontal Scroll Progress Indicator */}
        <div className="projects-mobile-scroll-indicator">
          <div className="projects-scroll-track">
            <div 
              className="projects-scroll-thumb"
              style={{ width: `${100 / projectsData.length}%`, transform: `translateX(${scrollProgress * (projectsData.length - 1) / 100 * 100}%)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
