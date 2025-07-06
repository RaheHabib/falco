import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.query) {
      alert('Please fill in all required fields (Name, Email, and Query)');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
              <div className="absolute left-0 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-70 pointer-events-none z-0"
      style={{ top: "20rem" }}
      ></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            If you've made it this far down the page,
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear about your project, reach out to us for a no-obligation call.
          </p>
        </div>

        {/* Main Content - Form and Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
              />
              
              <textarea
                name="query"
                placeholder="Query*"
                value={formData.query}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300 resize-none"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Us
              </button>
            </div>
          </div>

          {/* Right Side - Double Capsule Graphic */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Large outer capsule */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-60 flex items-center justify-center">
                {/* Inner capsule */}
                <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-80 flex items-center justify-center">
                  {/* Innermost element */}
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-500 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-10">
            join over 400+ startup already growing with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get's Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}