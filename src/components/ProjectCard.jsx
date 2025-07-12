import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tags, github }) => {
  return (
    <div id='project' className="p-6 border rounded-xl shadow hover:shadow-lg transition ">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <Link to={`/projects/${id}`} className="text-sm bg-black hover:bg-blue-700 text-white px-4 py-2 rounded transition flex items-center gap-2">
          <FiGlobe className="inline-block text-sm" /> Website
        </Link>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm bg-black hover:bg-blue-700 text-white px-2 py-2 rounded transition flex items-center gap-2">
          <FaGithub className="inline-block text-sm" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
