import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-slate-200 mt-12 bg-slate-50/50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-2">
          <span className="block text-lg font-bold text-professional-gradient animate-pulse">
            Designed & Developed by RTcodeX
          </span>
          <span className="block text-slate-500 text-sm tracking-wide">
            {new Date().getFullYear()} &copy; All rights reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
