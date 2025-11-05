import React from 'react';
import { Globe, Smartphone, ShoppingCart, Palette, Code2, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  // This would typically come from an API/database in a real application
  const services = [
    {
      id: 1,
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, and PHP.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      price: "Starting at $2000"
    },
      {
      id: 2,
      icon: <Code2 className="text-purple-600" size={32} />,
      title: "WordPress Solutions",
      description: "Complete online store with, WooCommerce, and Real State, Hotel Booking, Taxi Booking,Learning Management, Portfolio, Buiness Portfolio.",
      features: ["Payment Integration", "Inventory Management"],
      price: "Starting at $599"
    },
    {
      id: 3,
      icon: <ShoppingCart className="text-purple-600" size={32} />,
      title: "E-Commerce Solutions",
      description: "Complete online store development with Shopify, WooCommerce, and custom solutions.",
      features: ["Payment Integration", "Inventory Management"],
      price: "Starting at $599"
    },
    {
      id: 4,
      icon: <Palette className="text-pink-600" size={32} />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance user experience and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $599"
    },
    {
      id: 5,
      icon: <ShoppingCart className="text-orange-600" size={32} />,
      title: "Shopif Store Design and Development",
      description: "Tailored solutions for unique business needs using cutting-edge technologies.",
      features: ["API Development", "Database Design", "Third-party Integration", "Maintenance"],
      price: "Starting at $1,299"
    },
    {
      id: 6,
      icon: <Search className="text-indigo-600" size={32} />,
      title: "SEO Optimization",
      description: "Comprehensive SEO services to improve your website's visibility and search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Optimization"],
      price: "Starting at $499"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive web development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;