import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ReactJS Frontend Developer",
      subtitle: "Building Modern Web Applications",
      description: "Creating responsive, interactive, and performant user interfaces with React, TypeScript, and modern frontend technologies.",
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "WordPress Developer & Designer",
      subtitle: "Custom WordPress Solutions",
      description: "Developing custom themes, plugins, and complete WordPress solutions that are scalable, secure, and SEO-optimized.",
      gradient: "from-green-600 via-teal-600 to-blue-600",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Shopify Designer & Developer",
      subtitle: "E-commerce Excellence",
      description: "Creating stunning Shopify stores with custom themes, apps, and integrations to boost your online business.",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[currentSlide].image}
          alt="Background"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} opacity-80 transition-all duration-1000`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-200">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;