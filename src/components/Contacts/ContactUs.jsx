import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mt-56 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2 sm:mb-3 md:mb-4">Contact Us</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">Get in Touch with Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Contact Falco Solutions today and let's start creating your digital success story. Our team is 
                ready to assist you with web design and development services. Whether you have a project 
                in mind or simply want to explore how we can help your business thrive online, we're here 
                for you. With our expertise and commitment to excellence, we'll bring your vision to life and 
                deliver outstanding results. Reach out to us now and let's discuss your next steps towards 
                a pixel-perfect digital solution.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Phone Number */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Phone Number</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-base sm:text-lg">+91-7894721848</p>
                    <p className="text-gray-700 text-base sm:text-lg">+91-889744538</p>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-700 text-base sm:text-lg">support@falcosolutions.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone number"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg resize-none"
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;