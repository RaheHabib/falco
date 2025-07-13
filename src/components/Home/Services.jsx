import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    'Software',
    'Mobile Apps',
    'Web Design',
    'Front-End',
    'Back-End'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { 
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const serviceVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 pt-10 sm:pt-20 md:pt-24 lg:pt-12 xl:pt-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 overflow-hidden">
      {/* Central Glow Effect */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        variants={glowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-24 h-24 sm:w-[10rem] sm:h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full bg-gradient-to-br from-purple-400/15 via-indigo-500/20 to-blue-600/10 blur-3xl"></div>
      </motion.div>

      {/* Removed duplicate padding container */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Left Section - Framer Motion Animation */}
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:ml-48"
              variants={contentVariants}
            >
              {/* Technology Header */}
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-2 h-2 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-400 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="flex items-baseline">
                  <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                    Technology
                  </h2>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 ml-1 sm:ml-2">
                    WE USE
                  </span>
                </div>
              </motion.div>

              {/* Services Section */}
              <motion.div 
                className="space-y-2 sm:space-y-3 md:space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-400 rounded-full flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                    Services
                  </h3>
                </motion.div>
                <motion.div 
                  className="space-y-1 sm:space-y-2 ml-4 sm:ml-12 md:ml-12"
                  variants={containerVariants}
                >
                  {services.map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-700 font-medium"
                      variants={serviceVariants}
                      whileHover={{ 
                        x: 5,
                        color: "#3B82F6",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Section - SVG Graphic */}
            <motion.div 
              className="flex justify-center lg:justify-end mt-6 lg:mt-0"
              variants={itemVariants}
            >
              <motion.div 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/Services shape.svg"
                  alt="Technology Services Graphic"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;