import React from 'react';
import { motion as Motion } from 'framer-motion';

const AboutView = () => (
  <Motion.div
    className="max-w-3xl mx-auto py-10 px-4"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h1 className="text-3xl font-bold mb-4">About Me</h1>
    <p className="mb-4">
      I'm <span className="font-semibold">Rohit Mahto</span>, a Software Engineer from Ranchi, Jharkhand, specializing in clean, scalable, and user-friendly web applications using the <span className="font-semibold">MERN stack</span>—MongoDB, Express.js, React.js, and Node.js. Driven by curiosity and a fast learning mindset, I’m always eager to adapt to new technologies and contribute to impactful digital solutions.
    </p>
    <p className="mb-4">
      <span className="font-semibold">Current Role:</span> Software Engineer at KK Dhaba & Restaurant, managing and developing a restaurant management web application to streamline operations, inventory, orders, staff coordination, and reporting.
    </p>
    <p className="mb-4">
      <span className="font-semibold">Previous Experience:</span> Software Developer Intern at Emax India, contributing to responsive web applications and collaborating on code reviews and best practices.
    </p>
    <p className="mb-4">
      <span className="font-semibold">Education:</span> Pursuing B.Sc. IT at Marwari College, Ranchi (CGPA: 7.9, graduating 2025).
    </p>
    <p className="mb-4">
      <span className="font-semibold">Projects:</span> <br />
      <span className="underline">Travel: Beyond Borders</span> — Travel website for sharing experiences, account creation, responsive design, live on Render.<br />
      <span className="underline">HR: Modern HR Management System</span> — Secure platform for job listings, candidate tracking, interview scheduling, and email integration.
    </p>
    <div className="mb-4">
      <span className="font-semibold">Tech Stack:</span>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-gray-200 px-2 py-1 rounded">JavaScript</span>
        <span className="bg-gray-200 px-2 py-1 rounded">React.js</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Express.js</span>
        <span className="bg-gray-200 px-2 py-1 rounded">MongoDB</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Tailwind CSS</span>
        <span className="bg-gray-200 px-2 py-1 rounded">Bootstrap</span>
        <span className="bg-gray-200 px-2 py-1 rounded">VS Code</span>
      </div>
    </div>
    <div className="mb-4">
      <span className="font-semibold">Why Work With Me?</span>
      <ul className="list-disc ml-6 mt-2">
        <li>Strong analytical thinking</li>
        <li>Adaptable and quick learner</li>
        <li>Collaborative team player</li>
        <li>Reliable and committed to long-term support</li>
      </ul>
    </div>
    <p className="mb-4">Fluent in English and Hindi. Open to new opportunities that challenge my skills and help me grow as a developer.</p>
  </Motion.div>
);

export default AboutView;
