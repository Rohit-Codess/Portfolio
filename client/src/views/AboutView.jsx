import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaLightbulb, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

const AboutView = () => (
  <section className="min-h-screen py-20 px-6 bg-professional-gradient relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-slate-400/20 to-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <Motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-professional-gradient">
          About RTcodeX Team
        </h1>
        <p className="text-xl text-slate-600 font-normal">
          Get to know more about our team's journey and expertise
        </p>
      </Motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Personal Info Card */}
        <Motion.div
          className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <FaUser className="text-sky-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-slate-800">RTcodeX Team Info</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-normal">
            We're <span className="font-medium text-professional-accent">Rohit & RTcodeX Team</span>, a dynamic Software Development team from Ranchi, Jharkhand, specializing in clean, scalable, and user-friendly web applications using the <span className="font-medium">MERN stack</span>—MongoDB, Express.js, React.js, and Node.js. Our team is driven by innovation, collaboration, and a fast learning mindset, always eager to adapt to emerging technologies and deliver cutting-edge solutions.
          </p>
        </Motion.div>

        {/* Current Role Card */}
        <Motion.div
          className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-emerald-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-slate-800">Current Projects</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-normal">
            <span className="font-medium text-emerald-600">Lead Software Development Team</span>, where Rohit & RTcodeX Team collaboratively manage and develop comprehensive restaurant management web applications. Our team streamlines operations through innovative solutions covering inventory management, order processing, staff coordination, analytics, and comprehensive reporting systems.
          </p>
        </Motion.div>

        {/* Education Card */}
        <Motion.div
          className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-indigo-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-slate-800">Team Background</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-normal">
            <span className="font-medium text-indigo-600">RTcodeX Team </span> has collective experience including previous internships at <span className="font-medium text-professional-accent">Emax India</span>, where team members contributed to responsive web applications, bringing diverse expertise and fresh perspectives to every project.
          </p>
        </Motion.div>

        {/* Projects Card */}
        <Motion.div
          className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-violet-600 text-2xl mr-3" />
            <h2 className="text-2xl font-medium text-slate-800">Key Projects</h2>
          </div>
          <div className="space-y-3 text-slate-600 font-normal">
            <p><span className="font-medium text-violet-600">Travel: Beyond Borders</span> — Comprehensive travel platform developed by RTcodeX Team for sharing experiences, featuring responsive design and live deployment on Render.</p>
            <p><span className="font-medium text-violet-600">HR Management System</span> — Enterprise-grade secure platform built by Rohit & RTcodeX Team for job listings, candidate tracking, and interview scheduling with advanced workflow automation.</p>
            <p><span className="font-medium text-violet-600">Restaurant Management Suite</span> — Full-stack solution by RTcodeX Team featuring POS integration, inventory tracking, customer management, and analytics dashboard.</p>
          </div>
        </Motion.div>
      </div>

      {/* Tech Stack Section */}
      <Motion.div
        className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex items-center mb-8 justify-center">
          <FaCode className="text-sky-600 text-2xl mr-3" />
          <h2 className="text-3xl font-medium text-slate-800">RTcodeX Team Tech Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Bootstrap', 'Git', 'Docker', 'AWS', 'ChatGPT', 'Gemini', 'Tailwind CSS', 'Prompt Engineering'].map((tech, index) => (
            <Motion.div
              key={tech}
              className="bg-gradient-to-r from-slate-50 to-sky-50 border border-slate-200 rounded-xl px-4 py-3 text-center shadow-professional hover:shadow-professional-lg hover:scale-105 transition-all duration-300 hover-professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <span className="text-slate-700 font-medium">{tech}</span>
            </Motion.div>
          ))}
        </div>
      </Motion.div>

      {/* Why Work With Me Section */}
      <Motion.div
        className="bg-professional-card rounded-2xl p-8 shadow-professional-lg border border-slate-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="flex items-center mb-8 justify-center">
          <FaLightbulb className="text-amber-600 text-2xl mr-3" />
          <h2 className="text-3xl font-medium text-slate-800">Why Work With US?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: FaLightbulb, title: 'Innovative Problem Solving', desc: 'Team-driven analytical thinking with creative solutions' },
            { icon: FaUsers, title: 'Collaborative Excellence', desc: 'Seamless teamwork and effective client communication' },
            { icon: FaAward, title: 'Adaptable & Future-Ready', desc: 'Quick adoption of emerging technologies and methodologies' },
            { icon: FaGlobe, title: 'Reliable Partnership', desc: 'Long-term commitment with 24/7 support and maintenance' }
          ].map((item, index) => (
            <Motion.div
              key={item.title}
              className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-sky-50 border border-slate-200 hover-professional"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
            >
              <item.icon className="text-professional-accent text-xl mt-1" />
              <div>
                <h3 className="font-medium text-slate-800">{item.title}</h3>
                <p className="text-slate-600 font-normal text-sm">{item.desc}</p>
              </div>
            </Motion.div>
          ))}
        </div>
        <Motion.p
          className="text-center text-slate-600 mt-6 font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          RTcodeX Team is fluent in English and Hindi, with multilingual capabilities. We're open to challenging opportunities that help us grow and deliver exceptional value to our clients worldwide.
        </Motion.p>
      </Motion.div>
    </div>
  </section>
);

export default AboutView;
