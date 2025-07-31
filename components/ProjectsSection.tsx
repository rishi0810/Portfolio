import React from 'react';
import ProjectCard from './ProjectCard';
import { content } from '@/lib/content';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{content.projectsSection.title}</h2>
        <p className="text-lg text-muted-foreground mt-4">
          {content.projectsSection.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {content.projectsSection.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
