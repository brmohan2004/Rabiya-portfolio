import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../../../common/ProjectCard/ProjectCard';
import imgCopy from '../../../../assets/image copy.png';
import autoCadImg from '../../../../assets/auto cad.jpg';
import revitImg from '../../../../assets/revit.jpg';
import './Projects.css';

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const projectsList = [
    {
      id: 1,
      number: '01',
      title: 'Curtain Wall & Glazing System',
      category: 'Façade Design & Shop Drawings',
      bgColor: '#1c1d20',
      image: imgCopy,
      link: '#',
    },
    {
      id: 2,
      number: '02',
      title: 'Aluminium Cladding & Detailing',
      category: 'AutoCAD & Revit 3D Drafting',
      bgColor: '#26272b',
      image: revitImg,
      link: '#',
    },
    {
      id: 3,
      number: '03',
      title: 'Structural Glass & BOQ Take-offs',
      category: 'Fabrication Layouts & Estimation',
      bgColor: '#1a222e',
      image: autoCadImg,
      link: '#',
    },
  ];

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
          {projectsList.map((project) => (
            <div key={project.id} className="projects-grid-item">
              <ProjectCard
                number={project.number}
                title={project.title}
                category={project.category}
                bgColor={project.bgColor}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* 3. Mobile Horizontal Scroll Progress Indicator */}
        <div className="projects-mobile-scroll-indicator">
          <div className="projects-scroll-track">
            <div 
              className="projects-scroll-thumb"
              style={{ width: `${100 / projectsList.length}%`, transform: `translateX(${scrollProgress * (projectsList.length - 1) / 100 * 100}%)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
