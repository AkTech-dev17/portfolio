import React from 'react';
import ProjectCard from './ProjectCard';

function Projects({ t }) {
  return (
    <section className="section">
      <h2>{t.projects.title}</h2>
      <div className="projects-grid">
        {t.projects.list.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;