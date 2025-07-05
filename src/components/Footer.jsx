import socials, { FaGithub, FaLinkedin, FaMailBulk } from '../constants/socials';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map((social) => {
            let IconComponent = null;
            if (social.icon === 'FaGithub') IconComponent = FaGithub;
            if (social.icon === 'FaLinkedin') IconComponent = FaLinkedin;
            if (social.icon === 'FaMailBulk') IconComponent = FaMailBulk;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-600 transition"
                title={social.name}
              >
                {IconComponent && <IconComponent className="text-2xl" />}
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rohit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
