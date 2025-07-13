import React from 'react';
import { motion } from 'framer-motion';

const CustomerTestimonialSection = () => {
  const customerAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    // "https://images.unsplash.com/photo-1494790108755-2616b332c3a7?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
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
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const avatarVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-8 overflow-hidden">
      {/* Main Container with margins */}
      <motion.div 
        className="max-w-7xl mx-auto h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)] bg-white rounded-2xl overflow-hidden shadow-2xl"
        variants={popupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="h-full flex flex-col lg:flex-row">
          
          {/* Left Dark Section with curved bottom-right */}
          <motion.div 
            className="relative flex-1 bg-gray-800 flex items-center justify-center lg:rounded-br-[100px] overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content */}
            <div className="relative z-10 text-center px-2 lg:px-16 max-w-2xl">
              {/* Quote Icon */}
              <motion.div 
                className="mb-8 flex justify-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  variants={quoteVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v-10h-10z"/>
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 lg:mb-12 leading-tight"
                variants={itemVariants}
              >
                What Our Customer Are Saying
              </motion.h1>
              
              {/* Bottom Quote Icon */}
              <motion.div 
                className="flex justify-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  variants={quoteVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h4v-10h10z"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Light Section */}
          <motion.div 
            className="flex-1 bg-gray-50 flex flex-col justify-center px-8 lg:px-16 py-8 lg:py-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Top Content */}
            <div className="mb-12 lg:mb-16">
              <motion.h2 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight"
                variants={itemVariants}
              >
                Help us to improve our productivity
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                Your feedback is vital for our improvement. At Falco Solutions, we value 
                collaboration and appreciate your input. Help us enhance our services by 
                sharing your thoughts. Together, we can provide an exceptional 
                experience. Share your suggestions today and be a part of our evolution. 
                Thank you for your contribution.
              </motion.p>
            </div>

            {/* Customer Avatars Section */}
            <motion.div 
              className="space-y-6 lg:space-y-8"
              variants={containerVariants}
            >
              {/* Avatar Row */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6"
                variants={itemVariants}
              >
                {customerAvatars.map((avatar, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
                    variants={avatarVariants}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4 
                    }}
                  >
                    <img
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Customer Info */}
              <motion.div 
                className="text-center lg:text-left"
                variants={itemVariants}
              >
                <motion.h3 
                  className="font-bold text-gray-900 text-xl lg:text-2xl mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Sarthak ranjan Hota
                </motion.h3>
                <p className="text-gray-600 text-lg">
                  Junior UI/UX designer at Byecom
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Specific Enhancements */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:rounded-br-\\[100px\\] {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerTestimonialSection;