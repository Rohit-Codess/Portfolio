// import useActiveSection from '../hooks/useActiveSection';
import { FaHome, FaCode, FaBars, FaUser, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const sections = [
  { name: 'home', icon: FaHome, href: '#home' },
  { name: 'code', icon: FaCode, href: '#projects' },
  { name: 'user', icon: FaUser, href: '#contact' },
];

const socials = [
  { name: 'file', icon: FaFile, href: '/assets/Rohit_Resume.pdf' },
  { name: 'github', icon: FaGithub, href: 'https://github.com/Rohit-Codess/' },
  { name: 'x', icon: SiX, href: 'https://x.com/rohitmahto7479/' },
  { name: 'linkedin', icon: FaLinkedin, href: 'https://linkedin.com/in/rohit-mahto1122' },
];

const Navbar = () => {
  // const activeSection = useActiveSection(sections.map(s => s.name));
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-center fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <nav className="bg-transparent rounded-full shadow flex justify-center px-6 py-3 space-x-6 max-w-4xl w-full pointer-events-auto">
        {/* First group */}
        {sections.map((sec) => (
          <a
            key={sec.name}
            href={sec.href}
            className="flex items-center justify-center text-black hover:text-blue-600 transition"
            aria-label={sec.name}
          >
            <sec.icon />
          </a>
        ))}
        {/* Divider */}
        <span className="border-l h-6 mx-3" />
        {/* Socials group */}
        {socials.map((soc) => (
          <a
            key={soc.name}
            href={soc.href}
            className="flex items-center justify-center text-black hover:text-blue-600 transition"
            aria-label={soc.name}
            target={soc.href.startsWith('http') ? '_blank' : undefined}
            rel={soc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <soc.icon />
          </a>
        ))}
        {/* Divider */}
        {/* No sun icon, so skip last divider */}
      </nav>
    </header>
  );
};

export default Navbar;
