import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // This would typically come from an API/database in a real application
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Aizaz delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding. The project was completed on time and within budget."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, EcoShop",
      company: "EcoShop Online",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Aizaz was a game-changer for our e-commerce business. He built us a stunning Shopify store that increased our conversion rate by 40%. Highly recommended!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, CreativeAgency",
      company: "Creative Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Aizaz transformed our outdated website into a modern, responsive platform. His React development skills are top-notch, and he's great at communicating throughout the project."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Owner, Local Business",
      company: "Thompson Services",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Professional, reliable, and skilled - that's how I'd describe Aizaz. He created a beautiful WordPress site for my business and provided excellent ongoing support."
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Startup Founder, HealthTech",
      company: "HealthTech Solutions",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Aizaz's expertise in both frontend and backend development helped us launch our platform successfully. His problem-solving skills and dedication are remarkable."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Clients <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl shadow-2xl hover:shadow-lg hover:shadow-blue-500/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-blue-400 opacity-20">
              <Quote size={48} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-400/30"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-400 font-medium">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-slate-400">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/50 border border-slate-700 shadow-lg p-3 rounded-full hover:bg-slate-700/50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="text-slate-300" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/50 border border-slate-700 shadow-lg p-3 rounded-full hover:bg-slate-700/50 transition-all duration-300 z-10"
          >
            <ChevronRight className="text-slate-300" size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-400 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl hover:border-slate-600 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;