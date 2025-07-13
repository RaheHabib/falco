import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Gift",
      subtitle: "Mobile App",
      type: "mobile",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "AMZ",
      subtitle: "Web Application",
      type: "web",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "AMZ Web",
      subtitle: "Application",
      type: "web",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Gift",
      subtitle: "Mobile App",
      type: "mobile",
      image: "/api/placeholder/400/300"
    }
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden">
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
        {/* Header Section */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="lg:max-w-md">
            <motion.p 
              className="text-sm font-medium text-orange-600 uppercase tracking-wider mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR WORK
            </motion.p>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Portfo
              <motion.span 
                className="inline-block bg-orange-700 text-white px-1 py-1 sm:px-2 sm:py-1 rounded-md transform -rotate-2"
                initial={{ rotate: -2, scale: 0.8 }}
                whileInView={{ rotate: -2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                whileHover={{ 
                  rotate: 2, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                lio
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl mollis arcu nisl. Ipsum nunc qenean eleifend sed et neque vivamus.
            </motion.p>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`group cursor-pointer ${
                index === 0 || index === 3 ? 'md:mt-0' : 'md:mt-16'
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Decorative Wave Icon */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src="/orange_curl.svg" alt="Curl Icon" className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </motion.div>

              {/* Project Title */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <motion.h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {item.subtitle}
                </motion.p>
              </motion.div>

              {/* Project Image/Card */}
              <motion.div 
                className={`
                  relative aspect-[4/3] rounded-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2
                  ${item.type === 'mobile' ? 'bg-black' : 'bg-gray-100'}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                {item.type === 'mobile' ? (
                  // Mobile App Card (Dark)
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <div className="text-center">
                      <motion.h4 
                        className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-300 text-base sm:text-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  // Web Application Card (Light)
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center p-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <div className="text-center">
                      <motion.h4 
                        className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-600 text-base sm:text-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;