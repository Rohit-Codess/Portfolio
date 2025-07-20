import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 border-t mt-12 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-2">
          <span className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            Designed & Developed by RTcodeX
          </span>
          <span className="block text-gray-500 text-sm tracking-wide">
            {new Date().getFullYear()} &copy; All rights reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
