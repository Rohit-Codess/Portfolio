import React, { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const sections = ['home', 'projects', 'contact'];

const Navbar = () => {
  const activeSection = useActiveSection(sections);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Rohit</h1>
        <ul className="hidden md:flex space-x-6">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`capitalize transition-colors ${
                  activeSection === sec ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-black'
                }`}
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">☰</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pb-4">
          {sections.map((sec) => (
            <li key={sec} className="mb-2">
              <a
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className={`block capitalize ${
                  activeSection === sec ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-black'
                }`}
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
