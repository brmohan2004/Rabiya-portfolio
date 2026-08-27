import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ id, number, title, category, image, bgColor = '#1c1d20', link }) => {
  const destination = link || (id ? `/project/${id}` : '#');

  return (
    <Link to={destination} className="project-card" aria-label={title}>
      {/* 1. Canvas Image Container */}
      <div className="project-card-image-wrapper" style={{ backgroundColor: bgColor }}>
        {number && <span className="project-card-number">{number}</span>}
        
        <div className="project-card-img-frame">
          <img 
            src={image} 
            alt={title} 
            className="project-card-img" 
          />
        </div>
      </div>

      {/* 2. Project Details Footer */}
      <div className="project-card-details">
        <div className="project-card-title-row">
          <h3 className="project-card-title">{title}</h3>
          <ArrowUpRight size={18} className="project-card-arrow" />
        </div>
        <p className="project-card-category">{category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
