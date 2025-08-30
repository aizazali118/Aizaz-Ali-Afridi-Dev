import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // To use local images in React (Vite, Create React App, etc.), place your images in the `public` folder.
  // For example, put your images in: public/project-pictures/
  // Then use: src="/project-pictures/your-image.png"
  // 
  // If you put images inside `src/project-pictures`, you need to import them:
  // import myImage from '../project-pictures/my-image.png';
  // and use: src={myImage}
  //
  // Recommended: Move your images to the `public/project-pictures` folder for easier usage.

  const projects = [
    {
      id: 1,
      title: "My Muslim Mentors",
      description: "Educational platform connecting students with Islamic mentors and scholars.",
      url: "https://mymuslimmentors.com/",
      image: "/images/mymuslimmentors.png",
      category: "Mentorship Platform",
      tech: ["WordPress", "Elementor", "ACF", "Figma to Wordpress"]
    },
    {
      id: 2,
      title: "Hassan Mehmood Portfolio",
      description: "Professional portfolio website showcasing creative work and achievements.",
      url: "https://hassan-mehmood.com/",
      image: "/images/hassanmehmood.png", // Place 'hassan-mehmood.png' inside the 'public/project-pictures' folder
      category: "UI/UX Designer Portfolio",
      tech: ["WordPress", "Elementor", "ACF", "Figma to Wordpress"]
    },
    {
      id: 3,
      title: "Sealed With Misk",
      description: "Sealed with Misk Institute is an online Islamic education platform. We provide quality and authentic Islamic knowledge using a mix of traditional and modern teaching methods.",
      url: "https://website.sealedwithmisk.com/",
      image: "/images/sealadwithmisk.png",
      category: "Online Learning Platform",
      tech: ["WordPress", "Elementor", "Figma", "LearnDash","WooCommerce","Figma to Wordpress"]
    },
    {
      id: 4,
      title: "Makkawi Transport",
      description: "Transportation service website with booking and fleet management system.",
      url: "https://makkawitransport.com/",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Car Booking Service in Riyadh",
      tech: ["WordPress", "Elementor", "ACF", "Figma to Wordpress", "WooCommerce"]
    },
    {
      id: 5,
      title: "MIK Security",
      description: "Professional security services company website with service showcase.",
      url: "https://miksecurity.co.uk/",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Security Services in UK",
      tech: ["WordPress", "Elementor", ]
    },
    {
      id: 6,
      title: "Aoraki Network",
      description: "Technology network platform with modern design and interactive features.",
      url: "https://aorakinetwork.com/",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Wifi Provider",
      tech: ["WordPress", "Elementor", ]
    }
  ];

  const allProjects = [
    ...projects,
    {
      id: 7,
      title: "Black Petals",
      description: "Elegant floral design and event planning business website.",
      url: "http://blackpetals.us/",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Flower Shop",
      tech: ["Shopify", "Dawn Theme", "Liquid"]
    },
    {
      id: 8,
      title: "Montiero",
      description: "Premium fashion and lifestyle brand with sophisticated e-commerce platform.",
      url: "https://www.montiero.pk/",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Clothing Store",
      tech: ["Shopify", "Dawn Theme", "Liquid"]
    },
    {
      id: 9,
      title: "Chashmatoo",
      description: "Eyewear e-commerce platform with modern design and seamless shopping experience.",
      url: "https://chashmatoo.com/",
      image: "/images/chashmatoo.png",
      category: "E-commerce Glasses Store",
      tech: ["Shopify", "Dawn Theme", "Liquid"]
    },
    {
      id: 10,
      title: "Hexa IT Solutions",
      description: "IT services company website with comprehensive service showcase.",
      url: "http://hexaitsolutions.com/",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Digital Marketing",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 11,
      title: "Tabadl AlKon",
      description: "Exchange platform with modern interface and secure transaction system.",
      url: "http://tabadlalkon.com/",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Finance",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 12,
      title: "Moallim AI",
      description: "AI-powered educational platform for personalized learning experiences.",
      url: "https://moallim.ai/",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI/Education",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 13,
      title: "Shangrila Hotel",
      description: "Luxury hotel website with booking system and elegant presentation.",
      url: "http://shangrila.pk/",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Hotel Booking System",
      tech: ["WordPress", "Elementor", "ACF","PSD to Wordpress","Booking System"]
    },
    {
      id: 14,
      title: "Rahmaa Institute",
      description: "Educational institute website with course management and student portal.",
      url: "https://rahmaainstitute.com/",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 15,
      title: "Sacara Accessories",
      description: "Car accessories e-commerce store with trendy product showcase.",
      url: "https://sacaraccessories.com/",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "WooCommerce",
      tech: ["WordPress", "Elementor", "ACF", "WooCommerce"]
    },
    {
      id: 16,
      title: "Soul Ease Physiotherapy",
      description: "Healthcare clinic website with appointment booking and service information.",
      url: "https://souleasephysiotherapy.com/",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Healthcare",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 17,
      title: "Foot Soul Clinic",
      description: "Specialized foot care clinic with professional healthcare services.",
      url: "https://footsoulclinic.co.uk/",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Healthcare",
      tech: ["WordPress", "Elementor", "ACF"]
    },
    {
      id: 18,
      title: "Creative Portfolio",
      description: "Modern portfolio website with interactive animations and smooth transitions.",
      url: "https://voluble-selkie-a2b7de.netlify.app/",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Portfolio",
      tech: ["WordPress", "Elementor", "ACF"]
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allProjects.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered, allProjects.length]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of my recent work and see how I bring ideas to life through code and design.
          </p>
        </div>

        {/* Auto-scrolling Slider */}
        <div 
          className="relative mb-16 overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {allProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(project.tech || []).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <Eye size={18} />
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAllProjects ? allProjects : projects).map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tech || []).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-300"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAllProjects ? 'Show Featured Projects' : 'View All Projects'}
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Projects;