import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaLightbulb, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

const AboutView = () => (
  <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <Motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 font-normal">
          Get to know more about my journey and expertise
        </p>
      </Motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Personal Info Card */}
        <Motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FaUser className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-gray-800">Personal Info</h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-normal">
            I'm <span className="font-medium text-blue-600">Rohit Mahto</span>, a Software Developer from Ranchi, Jharkhand, specializing in clean, scalable, and user-friendly web applications using the <span className="font-medium">MERN stack</span>—MongoDB, Express.js, React.js, and Node.js. Driven by curiosity and a fast learning mindset, I'm always eager to adapt to new technologies.
          </p>
        </Motion.div>

        {/* Current Role Card */}
        <Motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-red-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-gray-800">Current Role</h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-normal">
            <span className="font-medium text-red-600">Software Developer</span> at KK Dhaba & Restaurant, managing and developing a restaurant management web application to streamline operations, inventory, orders, staff coordination, and reporting.
          </p>
        </Motion.div>

        {/* Education Card */}
        <Motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-green-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-gray-800">Education</h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-normal">
            Complete <span className="font-medium text-green-600">B.Sc. IT</span> at Marwari College, Ranchi (CGPA: 7.9, graduating 2025). Previously interned at <span className="font-medium text-blue-600">Emax India</span>, contributing to responsive web applications.
          </p>
        </Motion.div>

        {/* Projects Card */}
        <Motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-purple-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-gray-800">Key Projects</h2>
          </div>
          <div className="space-y-3 text-gray-600 font-normal">
            <p><span className="font-medium text-purple-600">Travel: Beyond Borders</span> — Travel website for sharing experiences, responsive design, live on Render.</p>
            <p><span className="font-medium text-purple-600">HR Management System</span> — Secure platform for job listings, candidate tracking, interview scheduling.</p>
          </div>
        </Motion.div>
      </div>

      {/* Tech Stack Section */}
      <Motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex items-center mb-8 justify-center">
          <FaCode className="text-blue-600 text-2xl mr-3" />
          <h2 className="text-3xl font-medium text-gray-800">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',  'Bootstrap', 'Git', 'Docker', 'ChatGPT', 'Gemini', 'Tailwind CSS', 'Prompt Engineering'].map((tech, index) => (
            <Motion.div
              key={tech}
              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl px-4 py-3 text-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <span className="text-gray-700 font-medium">{tech}</span>
            </Motion.div>
          ))}
        </div>
      </Motion.div>

      {/* Why Work With Me Section */}
      <Motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="flex items-center mb-8 justify-center">
          <FaLightbulb className="text-yellow-600 text-2xl mr-3" />
          <h2 className="text-3xl font-medium text-gray-800">Why Work With Me?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: FaLightbulb, title: 'Strong Analytical Thinking', desc: 'Problem-solving with logical approach' },
            { icon: FaUsers, title: 'Collaborative Team Player', desc: 'Effective communication and teamwork' },
            { icon: FaAward, title: 'Adaptable & Quick Learner', desc: 'Fast adaptation to new technologies' },
            { icon: FaGlobe, title: 'Reliable & Committed', desc: 'Long-term support and dedication' }
          ].map((item, index) => (
            <Motion.div
              key={item.title}
              className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
            >
              <item.icon className="text-blue-600 text-xl mt-1" />
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-gray-600 font-normal text-sm">{item.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
        <Motion.p
          className="text-center text-gray-600 mt-6 font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          Fluent in English and Hindi. Open to new opportunities that challenge my skills and help me grow as a developer.
        </Motion.p>
      </Motion.div>
    </div>
  </section>
);

export default AboutView;
