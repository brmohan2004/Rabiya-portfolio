import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building, Calendar, Wrench, Layers } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import Contact from '../landing page/components/Contact/Contact';
import Header from '../../common/Header/Header';
import MobileNavbar from '../../common/MobileNavbar/MobileNavbar';
import Sidebar from '../../common/Sidebar/Sidebar';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when opening a project detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find((p) => p.id === id);

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="project-not-found-page">
        <Header />
        <div className="not-found-container">
          <h2>Project Not Found</h2>
          <p>The civil or façade project you are looking for does not exist.</p>
          <Link to="/" className="back-home-btn">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
        <Contact />
      </div>
    );
  }

  // Related projects (filter out current project)
  const relatedProjects = projectsData.filter((p) => p.id !== id);

  return (
    <div className="project-detail-page">
      <Sidebar />
      <MobileNavbar />
      <Header />

      {/* Hero Header Section */}
      <section className="project-detail-hero">
        <div className="project-detail-container">
          {/* Back Button */}
          <Link to="/" className="project-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>

          {/* Title & Category */}
          <div className="project-detail-title-block">
            <span className="project-detail-category-badge">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
          </div>

          {/* Spec Grid */}
          <div className="project-spec-grid">
            <div className="project-spec-item">
              <span className="spec-label"><Building size={16} /> Client</span>
              <span className="spec-value">{project.client}</span>
            </div>
            <div className="project-spec-item">
              <span className="spec-label"><Calendar size={16} /> Year</span>
              <span className="spec-value">{project.year}</span>
            </div>
            <div className="project-spec-item">
              <span className="spec-label"><Wrench size={16} /> Services</span>
              <span className="spec-value">{project.services}</span>
            </div>
            {project.specs?.software && (
              <div className="project-spec-item">
                <span className="spec-label"><Layers size={16} /> Software & Tools</span>
                <span className="spec-value">{project.specs.software}</span>
              </div>
            )}
          </div>

          {/* Hero Project Image Display */}
          <div className="project-detail-img-wrapper">
            <img src={project.image} alt={project.title} className="project-detail-hero-img" />
          </div>
        </div>
      </section>

      {/* Detailed Content & Technical Highlights */}
      <section className="project-detail-content-section">
        <div className="project-detail-container">
          <div className="project-story-grid">
            {/* Left Overview */}
            <div className="project-story-left">
              <h2 className="project-section-heading">Project Overview</h2>
              <p className="project-description-text">{project.description}</p>

              {project.specs && (
                <div className="project-technical-specs-box">
                  <h3 className="specs-box-title">Technical Specifications</h3>
                  <ul className="specs-list">
                    <li><strong>Location:</strong> {project.specs.location}</li>
                    <li><strong>Building Type:</strong> {project.specs.buildingType}</li>
                    <li><strong>Façade / Structural System:</strong> {project.specs.facadeSystem}</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Right Highlights */}
            <div className="project-story-right">
              <h2 className="project-section-heading">Key Highlights & Scope</h2>
              <div className="project-highlights-list">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item-card">
                    <CheckCircle2 size={22} className="highlight-check-icon" />
                    <p className="highlight-text">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="related-projects-section">
        <div className="project-detail-container">
          <div className="related-projects-header">
            <h2 className="related-projects-title">
              Related Projects <ArrowUpRight size={24} className="related-icon" />
            </h2>
            <Link to="/" className="view-all-link">
              View All <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="related-projects-grid">
            {relatedProjects.slice(0, 3).map((relProj, idx) => (
              <div key={relProj.id} className="related-project-card-item">
                <ProjectCard
                  id={relProj.id}
                  number={String(idx + 1).padStart(2, '0')}
                  title={relProj.title}
                  category={relProj.category}
                  image={relProj.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact Section for all pages */}
      <Contact />
    </div>
  );
};

export default ProjectDetail;
