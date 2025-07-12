import React from 'react';
import { motion as Motion} from 'framer-motion';

const ServicesView = () => (
  <Motion.div
    className="max-w-2xl mx-auto py-10 px-4"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h1 className="text-3xl font-bold mb-4">Services</h1>
    <ul className="list-disc ml-6 space-y-3">
      <li>
        <span className="font-semibold">Custom Web App Development (React/Node)</span><br />
        I build scalable, secure, and user-friendly web applications tailored to your business needs.
      </li>
      <li>
        <span className="font-semibold">Admin Dashboard / ERP System</span><br />
        Streamline your operations with custom dashboards and management tools for restaurants, HR, and more.
      </li>
      <li>
        <span className="font-semibold">UI/UX Design for SaaS</span><br />
        Modern, responsive interfaces that delight users and drive engagement.
      </li>
      <li>
        <span className="font-semibold">App Maintenance & Optimization</span><br />
        Keep your apps running smoothly with ongoing support, updates, and performance improvements.
      </li>
    </ul>
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Industry Solutions</h2>
      <p>I help restaurant owners go digital with order & kitchen management tools, and empower HR teams with modern candidate tracking and interview scheduling platforms.</p>
    </div>
  </Motion.div>
);

export default ServicesView;
