import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const features = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="text-emerald-400" size={24} />,
      title: "Creative Design",
      description: "Crafting visually appealing and user-friendly interfaces that engage users."
    },
    {
      icon: <Zap className="text-amber-400" size={24} />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: <Award className="text-cyan-400" size={24} />,
      title: "Quality Delivery",
      description: "Delivering high-quality solutions on time with attention to detail."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate front-end Developer with expertise in modern web technologies.
            I love creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Turning Ideas Into Reality
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              With over 2 years of experience in web development, I specialize in creating
              modern, responsive, and user-friendly applications. My expertise spans across
              frontend development with React, backend development with PHP, and e-commerce
              solutions with WordPress and Shopify.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest
              technologies to deliver cutting-edge solutions that meet today's digital demands.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">ReactJS</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">WordPress</span>
              <span className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30">Shopify</span>
              <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">PHP</span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">Tailwind CSS, HTML, CSS, JavaScript</span>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
