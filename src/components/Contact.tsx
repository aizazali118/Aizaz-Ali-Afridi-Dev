import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for your message! I\'ll get back to you soon. Check your email for confirmation.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again or contact me directly via WhatsApp.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact me directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923359574017', '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone with a great idea, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-300">+92 335 9574017<br />+92 302 960 1217</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">WhatsApp</h4>
                  <button
                    onClick={handleWhatsApp}
                    className="text-green-400 hover:text-green-300 transition-colors duration-300"
                  >
                    Chat with me on WhatsApp
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-300">aaizaz519@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-300">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Button */}
            <div className="pt-8">
              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <MessageCircle size={20} />
                <span>Quick Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className={`bg-gray-800 p-8 rounded-2xl transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;