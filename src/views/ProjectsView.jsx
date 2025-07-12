import React from 'react';
import projects from '../constants/projects';
import ProjectCard from '../components/ProjectCard';
import { motion as Motion} from 'framer-motion';

const ProjectsView = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProjectCard {...project} id={project.id} />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
