import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaRocket, FaCheckCircle, FaUsers } from 'react-icons/fa';

// Example project data (replace with real data or fetch from API)
const projects = {
  'kids-school': {
    title: 'Kids School Management System',
    description: 'Comprehensive school management platform designed for kids education centers, featuring student enrollment, class scheduling, parent communication, and academic progress tracking with child-friendly interface.',
    url: 'https://school-umber-chi.vercel.app/',
    iframeUrl: 'https://school-umber-chi.vercel.app/',
    keyPoints: [
      'Student enrollment and registration system',
      'Class scheduling and timetable management',
      'Parent-teacher communication portal',
      'Academic progress tracking and reporting',
      'Child-friendly and intuitive interface',
      'Responsive design for all devices',
      'Built with React and modern technologies'
    ],
    impact: 'Streamlines school administration and enhances communication between teachers, students, and parents.',
    techStack: ['React', 'Tailwind CSS', 'React-Router-dom', 'Vite', 'Responsive Design'],
    usage: 'Used by school administrators, teachers, and parents for educational management.'
  },
  'cimpress-redesign': {
    title: 'Cimpress Platform Redesign',
    description: 'Modern redesign of Cimpress printing and marketing services platform with enhanced UX/UI, improved navigation, responsive design, and streamlined ordering process for better user experience.',
    url: 'https://cimpress-website.vercel.app/',
    iframeUrl: 'https://cimpress-website.vercel.app/',
    keyPoints: [
      'Modern and intuitive user interface design',
      'Enhanced navigation and user experience',
      'Responsive design for all screen sizes',
      'Streamlined product ordering process',
      'Improved visual hierarchy and typography',
      'Smooth animations with Framer Motion',
      'TypeScript for better code reliability'
    ],
    impact: 'Delivers a superior user experience for customers seeking printing and marketing services.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'UX/UI Design'],
    usage: 'Used by customers for ordering printing and marketing materials online.'
  },
  'vaultize-redesign': {
    title: 'Vaultize Security Platform',
    description: 'Complete redesign of Vaultize cybersecurity platform with modern interface, enhanced security features, dashboard analytics, and improved user authentication flow for enterprise security solutions.',
    url: 'https://vaultize-website.vercel.app/',
    iframeUrl: 'https://vaultize-website.vercel.app/',
    keyPoints: [
      'Modern cybersecurity platform interface',
      'Enhanced security dashboard and analytics',
      'Improved user authentication flow',
      'Real-time security monitoring features',
      'Professional enterprise-grade design',
      'Interactive security metrics visualization',
      'Responsive design with modern icons'
    ],
    impact: 'Provides enterprises with a powerful and intuitive cybersecurity management platform.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React Icons', 'React Router DOM'],
    usage: 'Used by cybersecurity professionals and enterprise teams for security management.'
  },
  'student-bill-desk': {
    title: 'Student Bill Desk Management',
    description: 'Digital Student Fee management system for educational institutions, featuring fee collection with no duplicate entries, payment tracking, invoice generation, and automated reminders with parent portal integration.',
    url: 'https://student-bill-desk.rtcodex.dev/',
    iframeUrl: 'https://student-bill-desk.rtcodex.dev/',
    keyPoints: [
      'Digital fee collection and payment processing',
      'Duplicate entry prevention system',
      'Automated invoice generation',
      'Payment tracking and history management',
      'Parent portal for fee notifications',
      'Secure database with MongoDB',
      'Real-time payment status updates'
    ],
    impact: 'Simplifies fee management for educational institutions and provides transparency for parents.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SweetAlert2', 'Axios', 'Mongoose', 'CORS'],
    usage: 'Used by educational institutions, students, and parents for fee management.'
  },
  'kk-restaurant': {
    title: 'KK Dhaba & Restaurant',
    description: 'It is MERN stack project where I am currently working as a Software Developer, building a restaurant management platform to streamline operations, inventory, orders, staff coordination, and reporting.',
    url: 'https://kk-web.rtcodex.dev/',
    iframeUrl: 'https://kk-web.rtcodex.dev/',
    keyPoints: [
      'Streamlines restaurant operations',
      'Inventory and order management',
      'Staff coordination and reporting',
      'Built with React, Node.js, MongoDB',
      'Deployed on Vercel & Render',
    ],
    impact: 'Helps restaurants manage daily workflows and gain actionable insights.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express'],
    usage: 'Used by restaurant owners and managers.'
  },
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
    techStack: ['Express.js', 'React.js', 'Node.js', 'CSS', 'JavaScript'],
    usage: 'Used by front-end developers and designers for rapid prototyping and sharing.'
  },
  'restaurant-erp-system': {
    title: 'Restaurant ERP System',
    description: 'It is designed to restaurant operations, from inventory and order management to staff and reporting.',
    url: 'https://kk-restaurant.rtcodex.dev/',
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
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Motion.div
          className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaCode className="text-4xl text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Project not found</h2>
          <p className="text-gray-600 font-normal mb-6">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft />
            Back to Projects
          </button>
        </Motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 font-medium mb-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </button>
          
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-normal max-w-3xl">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaExternalLinkAlt className="mr-2" />
              Visit Website
            </a>
          </div>
        </Motion.div>
        {/* Project Preview */}
        <Motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <iframe 
              src={project.iframeUrl} 
              title={project.title} 
              className="w-full h-96 rounded-xl shadow-lg pointer-events-none" 
              scrolling="no"
            />
            {/* Overlay to block interaction */}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl" style={{ pointerEvents: 'none' }}></div>
          </div>
        </Motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Key Points */}
          <Motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <FaCheckCircle className="text-green-600 text-2xl mr-3" />
              <h2 className="text-2xl font-medium text-gray-800">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {project.keyPoints.map((point, idx) => (
                <Motion.li
                  key={idx}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-normal">{point}</span>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Project Details */}
          <Motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Impact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaRocket className="text-purple-600 text-xl mr-3" />
                <h3 className="text-xl font-medium text-gray-800">Impact</h3>
              </div>
              <p className="text-gray-600 font-normal">{project.impact}</p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaCode className="text-blue-600 text-xl mr-3" />
                <h3 className="text-xl font-medium text-gray-800">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-sm text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FaUsers className="text-indigo-600 text-xl mr-3" />
                <h3 className="text-xl font-medium text-gray-800">Usage</h3>
              </div>
              <p className="text-gray-600 font-normal">{project.usage}</p>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailView;
