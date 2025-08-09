import React from 'react';
import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <div className="flex p-2 justify-center gap-5">
      {projects.map((project) => (
        <ProjectCard name={project.name} icon={project.icon} key={project.id} id={project.id} />
      ))}
    </div>
  );
}

export default Projects;
