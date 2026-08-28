import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import autoCadImg from '../../../../assets/auto cad.jpg';
import revitImg from '../../../../assets/revit.jpg';
import staadImg from '../../../../assets/staad pro.jpg';
import primaveraImg from '../../../../assets/Primavera 6.webp';
import msOfficeImg from '../../../../assets/MS Office.webp';
import './Skills.css';

const Skills = () => {
  const [activeCube, setActiveCube] = useState(null);

  const skillsData = [
    {
      id: 1,
      name: 'Auto CADD',
      category: '2D & 3D Drafting',
      image: autoCadImg,
    },
    {
      id: 2,
      name: 'Revit',
      category: 'BIM & Façade Modeling',
      image: revitImg,
    },
    {
      id: 3,
      name: 'STAAD Pro',
      category: 'Structural Analysis',
      image: staadImg,
    },
    {
      id: 4,
      name: 'Primavera',
      category: 'Project Scheduling',
      image: primaveraImg,
    },
    {
      id: 5,
      name: 'MS Office',
      category: 'Documentation & BOQ',
      image: msOfficeImg,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">
            Skills & Software <ArrowUpRight size={24} className="skills-title-icon" />
          </h2>
        </div>

        {/* 3D Interactive Jumping Cubes Grid */}
        <div className="skills-grid skills-grid-5">
          {skillsData.map((skill) => (
            <div 
              key={skill.id} 
              className={`skill-3d-cube ${activeCube === skill.id ? 'is-hovered' : ''}`}
              onMouseEnter={() => setActiveCube(skill.id)}
              onMouseLeave={() => setActiveCube(null)}
            >
              <div className="cube-3d-wrapper">
                {/* Front Face */}
                <div className="cube-face cube-front">
                  <div className="cube-icon-box">
                    <img src={skill.image} alt={skill.name} className="cube-skill-img" />
                  </div>
                  <span className="cube-skill-name">{skill.name}</span>
                  <span className="cube-skill-category">{skill.category}</span>
                </div>

                {/* 3D Depth Top Face */}
                <div className="cube-face cube-top" />

                {/* 3D Depth Side Face */}
                <div className="cube-face cube-side" />
              </div>

              {/* 3D Dynamic Jump Drop Shadow */}
              <div className="cube-shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
