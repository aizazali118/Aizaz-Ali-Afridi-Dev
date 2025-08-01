import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "Creative Design",
      description: "Crafting visually appealing and user-friendly interfaces that engage users."
    },
    {
      icon: <Zap className="text-yellow-600" size={24} />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: <Award className="text-green-600" size={24} />,
      title: "Quality Delivery",
      description: "Delivering high-quality solutions on time with attention to detail."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Turning Ideas Into Reality
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My expertise spans across 
              frontend development with React, backend development with PHP, and e-commerce 
              solutions with WordPress and Shopify.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest 
              technologies to deliver cutting-edge solutions that meet today's digital demands.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">WordPress</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Shopify</span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">PHP</span>
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
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