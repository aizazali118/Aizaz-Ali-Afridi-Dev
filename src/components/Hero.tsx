import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg' },
    { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
    { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg' },
    { name: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Photoshop', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
    { name: 'YouTube', logo: 'https://cdn.worldvectorlogo.com/logos/youtube-icon.svg' },
    { name: 'Facebook', logo: 'https://cdn.worldvectorlogo.com/logos/facebook-4.svg' },
    { name: 'LinkedIn', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
    { name: 'Instagram', logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016.svg' }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center py-20 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiA0N2MzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-white space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Aizaz Ali Afridi
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  WordPress & Shopify Developer
                </p>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Frontend, UI & UX Designer
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Crafting beautiful, functional, and user-centric digital experiences
                that help businesses grow and succeed online.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">25+</span>
                <span className="text-sm text-gray-400">Projects Done</span>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">20+</span>
                <span className="text-sm text-gray-400">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img
                  src="/images/aizaz ali.png"
                  alt="Aizaz Ali Afridi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {skills.map((skill, index) => {
                    const angle = (rotation + (index * (360 / skills.length))) * (Math.PI / 180);
                    const radius = 200;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={skill.name}
                        className="absolute top-1/2 left-1/2 transition-all duration-100"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div className="bg-white rounded-full p-3 shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group cursor-pointer w-16 h-16">
                          <div className="text-center relative">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-10 h-10 object-contain"
                            />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-gray-900/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
