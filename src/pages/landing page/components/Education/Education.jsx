import React from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'BSc in Computer Science',
      institution: 'University of Amsterdam',
      period: '2016 – 2020',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header">
          <h2 className="education-title">
            Education <ArrowUpRight size={24} className="education-title-icon" />
          </h2>
        </div>

        {/* Education List / Grid */}
        <div className="education-list">
          {educationList.map((item) => (
            <div key={item.id} className="education-card">
              <div className="education-info">
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <span className="education-period">{item.period}</span>
              </div>
              <div className="education-icon-wrapper">
                <GraduationCap size={44} strokeWidth={1.4} className="education-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
