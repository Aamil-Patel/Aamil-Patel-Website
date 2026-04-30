import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import resumePdf from '@/imports/aamil-patel-resume.pdf';
import homeBackground from '@/imports/home-background.jpg';

const technicalSkills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C++', 'Haskell', 'HTML', 'SQL'],
  },
  {
    category: 'Developer Tools',
    items: ['VS Code', 'Spyder', 'Jupyter Notebook'],
  },
  {
    category: 'Relevant Coursework',
    items: [
      'Discrete Structures',
      'Program Design & Concepts',
      'Data Structures & Algorithms',
      'Computer Organization',
      'Intro to Computer Systems',
      'Cloud Computing',
      'Software Security',
    ],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationSections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Education & Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'extracurricular', label: 'Extracurricular' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'extracurricular', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 mx-auto">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`uppercase text-sm tracking-wide transition-colors ${
                    activeSection === section.id
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`uppercase text-sm tracking-wide text-left px-2 py-1 ${
                    activeSection === section.id
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-white relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="absolute inset-0 bg-gray-950/55" />
        <div className="text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Aamil Patel</h1>
          <h3 className="text-xl md:text-2xl text-gray-300 mb-8">
            <span>Computer Science Graduate</span> | <span>Full-Stack Developer</span> | <span>Teaching Assistant</span>
          </h3>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Aamil-Patel" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/aamil-patel" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:aamil0621@gmail.com" className="hover:text-purple-300 transition-colors">
              <Mail size={32} />
            </a>
          </div>
          <a
            href={resumePdf}
            download="Aamil-Patel-Resume.pdf"
            className="inline-flex items-center rounded-full border border-purple-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-purple-400 hover:border-purple-400"
          >
            Download Resume
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={40} className="text-white" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-2">About</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Let me introduce myself.</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Profile</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science student at Texas A&M University with a 3.97 GPA, graduating in May 2026.
                With minors in Math and Business, I enjoy combining technical problem-solving with analytical thinking.
                I'm especially interested in using math and computer science to turn data into decisions, uncover patterns,
                understand why outcomes happen, and create measurable business impact through insight-driven work.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Full Name:</strong> Aamil Patel
                </li>
                <li>
                  <strong className="text-white">Email:</strong> aamil0621@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">
                      {group.category}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume/Education Section */}
      <section id="resume" className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Resume</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Education & Experience</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm">
                  🎓
                </span>
                Education
              </h3>
              <div className="border-l-2 border-purple-300 pl-6 pb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-300 mb-2">Texas A&M University</p>
                <p className="text-sm text-gray-400 mb-3">August 2022 - May 2026</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• GPA: 3.97</li>
                  <li>• Minors in Math and Business</li>
                  <li>• 132 credits earned</li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm">
                  💼
                </span>
                Work Experience
              </h3>

              <div className="space-y-8">
                <div className="border-l-2 border-purple-300 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-1">Website Development Intern</h4>
                  <p className="text-gray-300 mb-2">Tax Strategist PLLC</p>
                  <p className="text-sm text-gray-400 mb-3">June 2024 - August 2024, June 2025 - August 2025</p>
                  <p className="text-gray-300">Developed responsive websites utilizing HTML and CSS, implementing design features to enhance user experience.</p>
                </div>

                <div className="border-l-2 border-purple-300 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-1">Teacher Assistant for CSCE 206 (C)</h4>
                  <p className="text-gray-300 mb-2">Texas A&M University</p>
                  <p className="text-sm text-gray-400 mb-3">October 2024 - December 2024</p>
                  <p className="text-gray-300">Mentored students in C programming fundamentals, debugging techniques, and algorithms.</p>
                </div>

                <div className="border-l-2 border-purple-300 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-1">Teacher Assistant for ENGR 102 (Python)</h4>
                  <p className="text-gray-300 mb-2">Texas A&M University</p>
                  <p className="text-sm text-gray-400 mb-3">August 2023 - December 2023</p>
                  <p className="text-gray-300">Guided 70 students in mastering Python programming with detailed feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Projects</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Check Out My Work</h1>
          </div>

          <div className="space-y-12">
            {/* Stampd */}
            <div className="border-l-4 border-purple-400 pl-8 py-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Stampd</h3>
              <p className="text-gray-300 mb-4">August 2025 - May 2026</p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Built a travel-focused social platform that lets users create trips, share moments, save places, and interact through comments, follows, and stamps. Developed a full-stack system with a Go API, PostgreSQL database, Expo mobile app, React-based admin portal, and public marketing website.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Go', 'PostgreSQL', 'React', 'Expo', 'TypeScript', 'Docker', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded text-sm border border-purple-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* POS System */}
            <div className="border-l-4 border-purple-400 pl-8 py-4">
              <h3 className="text-2xl font-semibold text-white mb-2">Panda Express POS System</h3>
              <p className="text-gray-300 mb-4">Academic Project</p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Built an example Point of Sale system for class using Panda Express as the business case. The project focused on order management, a clear order-processing interface, and real-time inventory tracking rather than a production deployment for the company.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Java', 'SQL', 'Database Design'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded text-sm border border-purple-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Extracurricular</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Leadership & Service</h1>
          </div>

          <div className="space-y-10">
            <div className="border-l-4 border-purple-400 pl-8 py-4 bg-gray-900 rounded-r-lg">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-semibold text-white">The Big Event Staff Assistant</h3>
                <a
                  href="https://bigevent.tamu.edu/staff-assistant-application/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wide text-purple-600 hover:text-purple-500"
                >
                  Learn More
                </a>
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Served in a student leadership role supporting The Big Event, Texas A&amp;M&apos;s large-scale day of service. The position emphasizes communication, teamwork, initiative, and community impact through resident coordination, job checks, and day-of event support.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Leadership', 'Community Service', 'Teamwork', 'Communication'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded text-sm border border-purple-400/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-purple-400 pl-8 py-4 bg-gray-900 rounded-r-lg">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-semibold text-white">Social Director, SLOPE</h3>
                <a
                  href="https://www.tamuslope.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wide text-purple-600 hover:text-purple-500"
                >
                  Learn More
                </a>
              </div>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Served as Social Director for SLOPE, a Texas A&amp;M organization focused on promoting equality through leadership and service. Helped build community, strengthen member engagement, and support an inclusive environment centered on leadership development and service.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Leadership', 'Event Planning', 'Community Building', 'Inclusive Leadership'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded text-sm border border-purple-400/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Contact</h5>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h1>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              I'm open to new software engineering opportunities, collaborations, and connections.
              If you think I'm a good fit, please contact me via any of the channels below.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a
                href="mailto:aamil0621@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-gray-950 border-2 border-purple-300/40 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all"
              >
                <Mail className="text-purple-400" size={32} />
                <div className="text-center">
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300 text-sm">aamil0621@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/aamil-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-950 border-2 border-purple-300/40 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all"
              >
                <Linkedin className="text-purple-400" size={32} />
                <div className="text-center">
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-gray-300 text-sm">aamil-patel</p>
                </div>
              </a>

              <a
                href="https://github.com/Aamil-Patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-950 border-2 border-purple-300/40 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all"
              >
                <Github className="text-purple-400" size={32} />
                <div className="text-center">
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-gray-300 text-sm">Aamil-Patel</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
