import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaRocket } from 'react-icons/fa';

const HomeView = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-professional-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Professional Badge */}
        <Motion.div
          className="inline-flex items-center px-4 py-2 bg-professional-card rounded-full text-sm text-slate-600 font-medium mb-6 shadow-professional"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaCode className="mr-2 text-sky-600" />
          Available for freelance work
        </Motion.div>

        {/* Name with Gradient */}
        <Motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, We're{' '}
          <span className="text-professional-gradient">
            RTcodeX
          </span>
        </Motion.h1>

        {/* Professional Title */}
        <Motion.h2
          className="text-xl md:text-3xl text-slate-700 mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Full Stack Developer |{' '}
          <span className="font-semibold text-professional-accent">MERN Stack Specialist</span> |{' '}
          <span className="font-bold text-professional-gradient">
            RTcodex
          </span>
        </Motion.h2>

        {/* Enhanced Description */}
        {/* About Section */}
        <Motion.section
          className="text-lg text-slate-700 max-w-3xl mb-8 leading-relaxed text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-professional-gradient">About RTcodeX Team</h3>
          <p className="mb-4">
            We design and engineer production-grade web applications with enterprise-grade reliability, high-performance <b>UI/UX</b>, and secure backend <b>architectures</b>. RTcodeX Team builds scalable systems that meet the highest performance and maintainability standards through collaborative excellence.
          </p>
          <p>
            By integrating <b>AI-driven tooling</b> into our design workflow, Rohit & RTcodeX Team eliminate repetitive tasks, accelerate prototyping, and elevate visual consistency — while retaining human-led strategic decision-making and core business logic design. This hybrid approach (AI automation + team expertise) enables faster delivery cycles and superior user experiences.
          </p>
        </Motion.section>

        {/* Core Competencies Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-professional-gradient">RTcodeX Core Competencies</h3>
          <ul className="list-disc list-inside ml-4 text-slate-700 text-base space-y-1">
            <li><b>Frontend Excellence:</b> React, TypeScript, JavaScript, Next.js, Vite, Tailwind CSS, responsive & accessible UI design</li>
            <li><b>Backend & APIs:</b> Node.js, Express.js, Python, RESTful API design, GraphQL, authentication, database integrations</li>
            <li><b>Architecture:</b> Microservices, scalable component architecture, state management, performance optimization, caching strategies</li>
            <li><b>DevOps & Delivery:</b> CI/CD pipelines, containerization (Docker), cloud deployment (AWS, Azure), automated testing</li>
            <li><b>AI-assisted Development:</b> Style-system automation, design token generation, component theming, automated visual regression checks</li>
            <li><b>Database Management:</b> MongoDB, PostgreSQL, MySQL, Redis, database optimization and scaling</li>
          </ul>
        </Motion.section>

        {/* Experience Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-professional-gradient">Team Professional Experience</h3>
          <ul className="list-disc list-inside ml-4 text-slate-700 text-base space-y-1">
            <li><b>KK Dhaba & Restaurant — Current:</b> Rohit & RTcodeX Team leading end-to-end development of restaurant management platforms focusing on reliability, security, and operational efficiency.</li>
            <li><b>Emax India — Previous:</b> Team members contributed to feature development, code quality improvements, and agile delivery practices in enterprise environments.</li>
            <li><b>Freelance Projects:</b> RTcodeX Team has delivered 5+ successful projects ranging from e-commerce platforms to SaaS applications.</li>
          </ul>
        </Motion.section>

        {/* Projects Section */}
          <Motion.section
            className="mb-8 text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-professional-gradient">RTcodeX Selected Projects</h3>
            <ul className="list-disc list-inside ml-4 text-slate-700 text-base space-y-1">
              <li>
                <b>Restaurant Management Suite:</b> RTcodeX Team developed a comprehensive, modern restaurant ecosystem featuring interactive digital menus, online reservation system, POS integration, inventory management, and seamless Google Maps integration for enhanced customer experience.
              </li>
              <li>
                <b>Travel: Beyond Borders:</b> Rohit & RTcodeX Team built an immersive travel platform enabling users to explore destinations, share experiences, view interactive posts, book accommodations, and connect with fellow travelers through AI-powered recommendations.
              </li>
              <li>
                <b>Enterprise HR Management System:</b> RTcodeX Team delivered a secure, scalable HR platform with role-based access control, automated job listing distribution, AI-powered candidate tracking, video interview scheduling, digital offer letter management, and comprehensive analytics dashboard.
              </li>
              <li>
                <b>E-commerce Platform:</b> Full-stack marketplace solution by RTcodeX Team with payment gateway integration, real-time inventory tracking, customer analytics, and mobile-first responsive design.
              </li>
            </ul>
          </Motion.section>

          {/* Value Proposition Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-professional-gradient">RTcodeX Value Proposition</h3>
          <p className="text-slate-700">
            RTcodeX Team brings a production-first mindset: comprehensive testing, performance SLAs, clear documentation, and cross-functional collaboration. Rohit & RTcodeX Team combine modern engineering practices with AI-driven tooling to deliver maintainable, high-performance applications that scale seamlessly. Our collaborative approach ensures faster time-to-market, reduced development costs, and superior user experiences.
          </p>
        </Motion.section>

        {/* Tagline Section */}
        <Motion.section
          className="mb-8 text-left mx-auto bg-professional-card rounded-xl shadow-professional-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-professional-gradient">RTcodeX Team Taglines</h3>
          <ul className="list-disc list-inside ml-4 text-slate-700 text-base space-y-1">
            <li>"AI-driven design automation. Team-led architecture. Enterprise-grade delivery."</li>
            <li>"Engineering scalable web applications with AI-accelerated workflows and production-grade team discipline."</li>
            <li>"From prototype to production — performance-first web applications powered by AI + collaborative team strategy."</li>
            <li>"Design systems automated. Core logic engineered by experts. Deliverables optimized through teamwork."</li>
            <li>"Where AI improves velocity and RTcodeX Team ensures correctness — production-ready web engineering excellence."</li>
            <li>"Rohit & RTcodeX Team: Transforming ideas into scalable digital solutions with precision and innovation."</li>
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
            className="group px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-xl font-semibold shadow-professional-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 hover-professional"
          >
            <FaRocket className="group-hover:animate-bounce" />
            Let's Work Together
          </Link>
          
          <a
            href="/assets/Resume.pdf" target='_blank'
            className="px-8 py-4 bg-professional-card border-2 border-slate-200 text-slate-700 rounded-xl font-semibold shadow-professional-lg hover:shadow-xl hover:border-sky-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 hover-professional"
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
            className="p-4 bg-professional-card rounded-full shadow-professional-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-sky-600 hover-professional"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/itsrohitdev" target='_blank'
            className="p-4 bg-professional-card rounded-full shadow-professional-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-sky-600 hover-professional"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/rohitmahto7479/" target='_blank'
            className="p-4 bg-professional-card rounded-full shadow-professional-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-slate-700 hover:text-sky-600 hover-professional"
          >
            <FaTwitter className="text-xl" />
          </a>
        </Motion.div>

        {/* Tech Stack Preview */}
        <Motion.div
          className="pt-8 border-t border-slate-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm text-slate-500 mb-4 font-medium">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JavaScript', 'Python', 'Tailwind CSS', 'Bootstrap', 'Git', 'Docker', 'AWS', 'ChatGPT', 'Gemini', 'Prompt Engineering'].map((tech, index) => (
              <Motion.span
                key={tech}
                className="px-4 py-2 bg-professional-card border border-slate-200 rounded-full text-sm text-slate-600 font-medium shadow-professional hover:shadow-professional-lg hover:scale-105 transition-all duration-300 hover-professional"
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
