import React from 'react';
import { motion as Motion} from 'framer-motion';
import { FaCode, FaCog, FaPalette, FaTools, FaUtensils, FaUsers, FaRocket, FaCheckCircle } from 'react-icons/fa';

const ServicesView = () => (
  <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
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
          <FaRocket className="mr-2 text-indigo-600" />
          What I Offer
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Services
        </h1>
        <p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">
          Professional web development solutions tailored to your business needs
        </p>
      </Motion.div>
      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            icon: FaCode,
            title: 'Custom Web App Development (React/Node)',
            description: 'I build scalable, secure, and user-friendly web applications tailored to your business needs.',
            color: 'from-red-500 to-red-600'
          },
          {
            icon: FaCog,
            title: 'Admin Dashboard / ERP System',
            description: 'Streamline your operations with custom dashboards and management tools for restaurants, HR, and more.',
            color: 'from-blue-500 to-blue-600'
          },
          {
            icon: FaPalette,
            title: 'UI/UX Design for SaaS',
            description: 'Modern, responsive interfaces that delight users and drive engagement.',
            color: 'from-purple-500 to-purple-600'
          },
          {
            icon: FaTools,
            title: 'App Maintenance & Optimization',
            description: 'Keep your apps running smoothly with ongoing support, updates, and performance improvements.',
            color: 'from-green-500 to-green-600'
          }
        ].map((service, index) => (
          <Motion.div
            key={service.title}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
              <service.icon className="text-xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 font-normal leading-relaxed">{service.description}</p>
          </Motion.div>
        ))}
      </div>

      {/* Industry Solutions */}
      <Motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-medium text-gray-800 mb-4">Industry Solutions</h2>
          <p className="text-gray-600 font-normal max-w-3xl mx-auto">
            Specialized solutions for specific industries, leveraging my experience and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Motion.div
            className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FaUtensils className="text-red-600 text-2xl mt-1" />
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Restaurant Solutions</h3>
              <p className="text-gray-600 font-normal text-sm">
                Help restaurant owners go digital with order & kitchen management tools, inventory tracking, and customer management systems.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaUsers className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-medium text-gray-800 mb-2">HR Management</h3>
              <p className="text-gray-600 font-normal text-sm">
                Empower HR teams with modern candidate tracking, interview scheduling platforms, and comprehensive employee management systems.
              </p>
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </div>
  </section>
);

export default ServicesView;
