import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Example project data (replace with real data or fetch from API)
const projects = {
  'travel-beyond-borders': {
    title: 'Travel: Beyond Borders',
    description: 'A travel website where users can explore and share travel experiences. Features account creation, responsive design, and is live on Render.',
    url: 'https://www.travel.rtcodex.dev/',
    iframeUrl: 'https://www.travel.rtcodex.dev/',
    keyPoints: [
      'Connects travelers worldwide',
      'Responsive design for all devices',
      'Live user stories and reviews',
      'Built with React, Node.js, MongoDB',
      'Deployed on Render',
    ],
    impact: 'Empowers users to share and discover travel experiences, building a global community.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Render'],
    usage: 'Used by travel enthusiasts to document and explore journeys.'
  },
  'hr-management-system': {
    title: 'HR: Modern HR Management System',
    description: 'A secure platform for job listings, candidate tracking, interview scheduling, and email integration using Nodemailer.',
    url: 'https://hr.rtcodex.dev/',
    iframeUrl: 'https://hr.rtcodex.dev/',
    keyPoints: [
      'Streamlines HR workflows',
      'Secure authentication and data',
      'Automated interview scheduling',
      'Built with MERN stack',
      'Email integration with Nodemailer',
    ],
    impact: 'Helps HR teams manage recruitment efficiently and securely.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Nodemailer'],
    usage: 'Used by HR professionals for modern recruitment.'
  },
  'codepen': {
    title: 'CodePen Clone',
    description: 'A social development environment for front-end designers and developers.',
    url: 'https://codepen.rtcodex.dev/',
    iframeUrl: 'https://codepen.rtcodex.dev/',
    keyPoints: [
      'Live HTML, CSS, and JS code editing',
      'Instant preview of code output',
      'Save and share code snippets (pens)',
      'User authentication and profiles',
      'Responsive and interactive UI',
      'Built with MERN stack',
    ],
    impact: 'Enables developers to experiment, showcase, and collaborate on front-end code in real time.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Nodemailer'],
    usage: 'Used by front-end developers and designers for rapid prototyping and sharing.'
  },
  'restaurant-erp-system': {
    title: 'Restaurant ERP System',
    description: 'It is designed to restaurant operations, from inventory and order management to staff and reporting.',
    url: '#',
    iframeUrl: 'https://kk-restaurant.rtcodex.dev/',
    keyPoints: [
      'Streamlines restaurant operations',
      'Inventory and order management',
      'Staff coordination and reporting',
      'Built with React, Node.js, MongoDB',
    ],
    impact: 'Helps restaurants manage daily workflows and gain actionable insights.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    usage: 'Used by restaurant owners and managers.'
  },
  'learnflow-tracker': {
    title: 'LearnFlow Tracker',
    description: 'Allows users to create tasks, track time spent, visualize progress, and receive browser notifications to stay focused.',
    url: 'https://learnflow-tracker.rtcodex.dev/',
    iframeUrl: 'https://learnflow-tracker.rtcodex.dev/',
    keyPoints: [
      'Task creation and time tracking',
      'Progress visualization',
      'Browser notifications',
      'Built with React and Bootstrap',
    ],
    impact: 'Helps users stay productive and focused on learning goals.',
    techStack: ['React', 'Bootstrap', 'Web Notification API'],
    usage: 'Used by students and professionals for productivity.'
  }
};

const ProjectDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return <div className="max-w-2xl mx-auto py-10 px-4 text-center">Project not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Visit Website</a>
      <button
        onClick={() => navigate('/projects')}
        className="mb-6 mx-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        ← Back to Projects
      </button>
      <div className="flex justify-center mb-6 relative">
        <iframe 
          src={project.iframeUrl} 
          title={project.title} 
          className="w-full h-96 rounded shadow pointer-events-none" 
          scrolling="no"
        />
        {/* Overlay to block interaction */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}></div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Key Points</h2>
        <ul className="list-disc ml-6">
          {project.keyPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <strong>Impact:</strong> {project.impact}
      </div>
      <div className="mb-2">
        <strong>Tech Stack:</strong> {project.techStack.join(', ')}
      </div>
      <div className="mb-2">
        <strong>Usage:</strong> {project.usage}
      </div>
    </div>
  );
};

export default ProjectDetailView;
