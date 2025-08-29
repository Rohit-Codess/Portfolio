import React from 'react';
import projects from '../constants/projects';
import ProjectCard from '../components/ProjectCard';
import { motion as Motion} from 'framer-motion';
import { FaCode, FaRocket, FaGithub } from 'react-icons/fa';

const ProjectsView = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 font-medium mb-6 shadow-lg">
            <FaCode className="mr-2 text-green-600" />
            Portfolio Showcase
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">
            Explore my latest work and development projects
          </p>
        </Motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} id={project.id} />
            </Motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <Motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-600 font-normal mb-6">
              I'm always excited to work on new and challenging projects. Let's bring your ideas to life!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub className="mr-2" />
              Start a Project
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ProjectsView;
