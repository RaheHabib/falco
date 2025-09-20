import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import WorkWithUs from './WorkWithUs';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import HomeProjects from './HomeProjects';

const Portfolio = () => {
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id='work' className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-20 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-purple-700/60 via-indigo-700/50 to-blue-700/50 rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-pink-700/50 via-purple-700/50 to-blue-700/50 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-pink-500/40 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
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
        <HomeProjects />
      </div>
      <WorkWithUs />

    </section>
  );
};

export default Portfolio;