import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Box, 
  PenTool, 
  Maximize2, 
  FileText, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCube, setActiveCube] = useState(null);

  const skillsData = [
    {
      id: 1,
      name: 'AutoCAD 2D/3D',
      category: 'Drafting & Specs',
      icon: <PenTool size={32} />,
      color: '#e11d48',
    },
    {
      id: 2,
      name: 'Façade Design',
      category: 'Curtain Wall / Glazing',
      icon: <Building2 size={32} />,
      color: '#4f46e5',
    },
    {
      id: 3,
      name: 'Revit Architecture',
      category: 'BIM & 3D Elevation',
      icon: <Box size={32} />,
      color: '#2563eb',
    },
    {
      id: 4,
      name: 'Civil Engineering',
      category: 'Structural Layouts',
      icon: <Compass size={32} />,
      color: '#059669',
    },
    {
      id: 5,
      name: '3ds Max / SketchUp',
      category: 'Architectural Visuals',
      icon: <Layers size={32} />,
      color: '#d97706',
    },
    {
      id: 6,
      name: 'Structural Joints',
      category: 'Steel & Glass Details',
      icon: <Maximize2 size={32} />,
      color: '#0891b2',
    },
    {
      id: 7,
      name: 'Quantity Surveying',
      category: 'BOQ & Estimation',
      icon: <FileText size={32} />,
      color: '#7c3aed',
    },
    {
      id: 8,
      name: 'Shop Drawings',
      category: 'ACP & Extrusions',
      icon: <ShieldCheck size={32} />,
      color: '#16a34a',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">
            Skills & Expertise <ArrowUpRight size={24} className="skills-title-icon" />
          </h2>
        </div>

        {/* 3D Interactive Jumping Cubes Grid */}
        <div className="skills-grid">
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
                  <div className="cube-icon-box" style={{ color: skill.color }}>
                    {skill.icon}
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
