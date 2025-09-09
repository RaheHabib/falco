import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseFalco = () => {
  // Animation variants for left content (coming from left margin)
  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for right content (coming from right margin)
  const rightContentVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Animation variants for child elements
  const childVariants = {
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

  return (
    <div className="relative py-12 md:py-16 lg:py-20">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="lg:pr-8"
            variants={leftContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-3"
              variants={childVariants}
            >
              Why Choose Falco Solutions?
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-3"
              variants={childVariants}
            >
              We combine product thinking with senior engineering to deliver measurable results.
            </motion.p>
            
            <motion.ul 
              className="text-gray-700 text-base md:text-lg mb-8 md:mb-3 space-y-2"
              variants={childVariants}
            >
              <motion.li 
                className="flex items-start"
                variants={childVariants}
              >
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>End-to-end delivery:</strong> research, design, web & mobile dev, AI, blockchain, SEO.</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={childVariants}
              >
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Conversion-first:</strong> analytics and experimentation drive decisions.</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={childVariants}
              >
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Modern stack:</strong> React/Next.js, Node/Python, Flutter, Solidity/Web3, AWS/Azure/GCP.</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={childVariants}
              >
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Security & scale:</strong> code reviews, testing, CI/CD and cloud best practice.</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={childVariants}
              >
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Post-launch growth:</strong> monitoring, A/B testing and continuous SEO.</span>
              </motion.li>
            </motion.ul>
            
            <motion.div 
              className="flex justify-center md:justify-start"
              variants={childVariants}
            >
              <motion.button 
                className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Graphic */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={rightContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="max-w-full">
              <motion.img
                src="graphic.png"
                alt="Falco Solutions team working on web development projects"
                className="w-full h-auto max-w-lg lg:max-w-full"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFalco;