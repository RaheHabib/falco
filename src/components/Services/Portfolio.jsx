import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceProjects from './ServiceProjects';

const Portfolio = () => {
  
  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  

  return (
    <section id='portfolio' className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <ServiceProjects />

      </div>
    </section>
  );
};

export default Portfolio;