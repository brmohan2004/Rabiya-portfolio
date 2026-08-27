import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code, 
  FileCode, 
  Globe, 
  Server, 
  Palette, 
  Layout, 
  GitBranch, 
  Database, 
  Cpu, 
  Sparkles, 
  Layers, 
  Terminal 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCube, setActiveCube] = useState(null);

  const skillsData = [
    {
      id: 1,
      name: 'React.js',
      category: 'Frontend',
      icon: <Code size={32} />,
      color: '#00d8ff',
    },
    {
      id: 2,
      name: 'Next.js',
      category: 'Framework',
      icon: <Globe size={32} />,
      color: '#1c1d20',
    },
    {
      id: 3,
      name: 'JavaScript',
      category: 'Language',
      icon: <FileCode size={32} />,
      color: '#f7df1e',
    },
    {
      id: 4,
      name: 'TypeScript',
      category: 'Language',
      icon: <FileCode size={32} />,
      color: '#3178c6',
    },
    {
      id: 5,
      name: 'Node.js',
      category: 'Backend',
      icon: <Server size={32} />,
      color: '#539e43',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      category: 'Styling',
      icon: <Layout size={32} />,
      color: '#38bdf8',
    },
    {
      id: 7,
      name: 'Figma',
      category: 'UI/UX Design',
      icon: <Palette size={32} />,
      color: '#f24e1e',
    },
    {
      id: 8,
      name: 'Git & GitHub',
      category: 'DevOps',
      icon: <GitBranch size={32} />,
      color: '#f05032',
    },
    {
      id: 9,
      name: 'REST APIs',
      category: 'Architecture',
      icon: <Database size={32} />,
      color: '#6366f1',
    },
    {
      id: 10,
      name: 'Redux / State',
      category: 'State Mgmt',
      icon: <Layers size={32} />,
      color: '#764abc',
    },
    {
      id: 11,
      name: 'Performance',
      category: 'Optimization',
      icon: <Cpu size={32} />,
      color: '#10b981',
    },
    {
      id: 12,
      name: 'Animations',
      category: 'Framer / CSS',
      icon: <Sparkles size={32} />,
      color: '#ec4899',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">
            Skills & Technologies <ArrowUpRight size={24} className="skills-title-icon" />
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
