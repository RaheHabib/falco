import React from 'react';
import { motion } from 'framer-motion';

const CareersSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 lg:mb-8 leading-tight">
              Careers with Falco Solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Join us for exciting career opportunities in web design and development. Work collaboratively, contribute to cutting-edge projects, and unleash your potential. We value innovation, growth, and creativity. Whether experienced or starting your career, make your mark with pixel-perfect designs and unmatched web solutions.
            </p>
          </motion.div>
          
          {/* Image - Right Side */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="careerSection.png"
                alt="Careers with Falco Solutions - Film production scene"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* YouTube overlay badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black bg-opacity-75 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="hidden sm:inline">Watch on YouTube</span>
                <span className="sm:hidden">YouTube</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;