import React from 'react';
import { motion as Motion} from 'framer-motion';

const HomeView = () => {
  return (
    <section id='home' className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gray-50">
      <Motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Rohit
      </Motion.h1>

      <Motion.h2
        className="text-xl md:text-2xl text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Software Engineer
      </Motion.h2>

      <Motion.p
        className="text-md text-gray-500 max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I design and develop full-featured, production-ready web applications with advanced UI/UX using React, Tailwind CSS, and Vite, backend by secure authentication, databases, and RESTful APIs — delivering real-time features.
      </Motion.p>

      <Motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="#contact"
          className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          Contact Me
        </a>
        <a
          href="/assets/Rohit_Resume.pdf"
          download
          className="px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Download CV
        </a>
      </Motion.div>
    </section>
  );
};

export default HomeView;
