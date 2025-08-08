import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';

const HomeView = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Professional Badge */}
        <Motion.div
          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 font-medium mb-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaCode className="mr-2 text-blue-600" />
          Available for freelance work
        </Motion.div>

        {/* Name with Gradient */}
        <Motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
            Rohit
          </span>
        </Motion.h1>

        {/* Professional Title */}
        <Motion.h2
          className="text-xl md:text-3xl text-purple-700 mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Full Stack Developer |{' '}
          <span className="font-semibold text-blue-600">MERN Stack Specialist</span> |{' '}
          <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            RTcodex
          </span>
        </Motion.h2>

        {/* Enhanced Description */}
        {/* About Section */}
        <Motion.section
          className="text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-blue-700">About Me</h3>
          <p className="mb-4">
            I design and engineer production-grade web applications with enterprise-grade reliability, high-performance <b>UI/UX</b>, and secure backend <b>architectures</b>. I build scalable systems that meet high performance and maintainability standards.
          </p>
          <p>
            By integrating <b>AI-driven tooling</b> into my design workflow, I eliminate repetitive tasks, accelerate prototyping, and elevate visual consistency — while retaining human-led strategic decision-making and core business logic design. This hybrid approach (AI automation + human expertise) enables faster delivery cycles and higher-quality user experiences.
          </p>
        </Motion.section>

        {/* Core Competencies Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Core Competencies</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-base space-y-1">
            <li><b>Frontend:</b> React, TypeScript, JavaScript, Vite, Tailwind CSS, responsive & accessible UI design</li>
            <li><b>Backend & APIs:</b> Node Js, Express Js, RESTful API design, authentication, database integrations</li>
            <li><b>Architecture:</b> Scalable component architecture, state management, performance optimization, caching strategies</li>
            <li><b>DevOps & Delivery:</b> CI/CD pipelines, containerization (Docker), environment-driven deployments, automated testing</li>
            <li><b>AI-assisted Design:</b> Style-system automation, design token generation, component theming, automated visual regression checks</li>
          </ul>
        </Motion.section>

        {/* Experience Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Professional Experience</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-base space-y-1">
            <li><b>KK Dhaba & Restaurant — Current:</b> Leading end-to-end development of a restaurant management platform focusing on reliability, security, and operational efficiency.</li>
            <li><b>Emax India — Intern:</b> Contributed to feature development, code quality improvements, and team-driven delivery practices.</li>
            <li><b>Education:</b> B.Sc. IT, Marwari College, Ranchi</li>
          </ul>
        </Motion.section>

        {/* Projects Section */}
          <Motion.section
            className="mb-8 text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-700">Selected Projects</h3>
            <ul className="list-disc list-inside ml-4 text-gray-700 text-base space-y-1">
              <li>
                <b>Restaurant Website:</b> Developed a modern, responsive website for a restaurant, featuring an interactive menu, online reservation system, and seamless integration with Google Maps for location and directions.
              </li>
              <li>
                <b>Travel: Beyond Borders:</b> Built a travel platform enabling users to explore destinations, share their own experiences, and view interactive posts from other travelers.
              </li>
              <li>
                <b>HR Management System:</b> A secure HR platform with role-based access, I provide job listing, candidate tracking, interview scheduling, and offer letter management.
              </li>
            </ul>
          </Motion.section>

          {/* Value Proposition Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Value Proposition</h3>
          <p className="text-gray-700">
            I bring a production-first mindset: testing, performance SLAs, clear documentation, and cross-functional collaboration. I combine modern engineering practices with AI-driven tooling to deliver maintainable, high-performance applications that scale.
          </p>
        </Motion.section>

        {/* Tagline Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-white/80 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Tagline Options</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-base space-y-1">
            <li>"AI-driven design automation. Human-led architecture. Enterprise-grade delivery."</li>
            <li>"Engineering scalable web apps with AI-accelerated workflows and production-grade discipline."</li>
            <li>"From prototype to production — performance-first web applications powered by AI + human strategy."</li>
            <li>"Design systems automated. Core logic engineered. Deliverables optimized."</li>
            <li>"Where AI improves velocity and humans ensure correctness — production-ready web engineering."</li>
          </ul>
        </Motion.section>

        {/* Professional Action Buttons */}
        <Motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <FaRocket className="group-hover:animate-bounce" />
            Let's Work Together
          </Link>
          
          <a
            href="/assets/Resume.pdf" target='_blank'
            className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload />
            Download CV
          </a>
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://github.com/Rohit-Codess/" target='_blank'
            className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/itsrohitdev" target='_blank'
            className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/rohitmahto7479/" target='_blank'
            className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600"
          >
            <FaTwitter className="text-xl" />
          </a>
        </Motion.div>

        {/* Tech Stack Preview */}
        <Motion.div
          className="pt-8 border-t border-gray-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm text-gray-500 mb-4 font-medium">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Git', 'Docker', 'ChatGPT', 'Gemini', 'Prompt Engineering'].map((tech, index) => (
              <Motion.span
                key={tech}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                {tech}
              </Motion.span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HomeView;
