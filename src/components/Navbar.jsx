import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTools ,FaCode, FaUser, FaCommentDots, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const sections = [
  { name: 'home', icon: FaHome, to: '/' },
  { name: 'services', icon: FaTools, to: '/services' },
  { name: 'projects', icon: FaCode, to: '/projects' },
  { name: 'about', icon: FaUser, to: '/about' },
  { name: 'contact', icon: FaCommentDots, to: '/contact' },
];

const socials = [
  { name: 'github', icon: FaGithub, href: 'https://github.com/Rohit-Codess/' },
  { name: 'x', icon: SiX, href: 'https://x.com/rohitmahto7479/' },
  { name: 'linkedin', icon: FaLinkedin, href: 'https://linkedin.com/in/itsrohitdev' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="flex justify-center sticky top-4 left-0 right-0 z-50 pointer-events-none">
      <nav className="bg-professional-card rounded-full shadow-professional-lg flex justify-center px-6 py-3 space-x-6 max-w-4xl w-full pointer-events-auto">
        {/* First group */}
        {sections.map((sec) => (
          <Link
            key={sec.name}
            to={sec.to}
            className={`flex items-center justify-center transition-all duration-300 hover-professional ${location.pathname === sec.to ? 'text-professional-accent font-bold scale-110' : 'text-slate-700 hover:text-professional-accent'}`}
            aria-label={sec.name}
          >
            <sec.icon />
          </Link>
        ))}
        {/* Divider */}
        <span className="border-l border-slate-300 h-6 mx-3" />
        {/* Socials group */}
        {socials.map((soc) => (
          <a
            key={soc.name}
            href={soc.href}
            className="flex items-center justify-center text-slate-700 hover:text-professional-accent transition-all duration-300 hover-professional"
            aria-label={soc.name}
            target={soc.href.startsWith('http') ? '_blank' : undefined}
            rel={soc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <soc.icon />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
