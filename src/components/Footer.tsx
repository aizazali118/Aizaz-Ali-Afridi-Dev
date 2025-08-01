import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/aizazali',
      name: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/aizazali',
      name: 'LinkedIn'
    },
    {
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/aizazali',
      name: 'Twitter'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:aizaz@example.com',
      name: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'E-commerce Solutions',
    'UI/UX Design',
    'SEO Optimization',
    'Maintenance & Support'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AizazAlidev
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate full-stack developer creating exceptional digital experiences 
              with modern technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">
                  <strong>Phone:</strong><br />
                  +92 335 9574017
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>Email:</strong><br />
                  aizaz@example.com
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <strong>Location:</strong><br />
                  Pakistan
                </p>
              </div>
              <button
                onClick={() => window.open('https://wa.me/923359574017', '_blank')}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-sm"
              >
                WhatsApp Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} AizazAlidev. Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>in Pakistan</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;