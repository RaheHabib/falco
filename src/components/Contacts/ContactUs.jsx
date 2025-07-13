import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
      scale: 0.95
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

  const glowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated background glows */}
      <motion.div 
        className="absolute left-0 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl pointer-events-none z-0"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div 
        className="absolute right-0 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl pointer-events-none z-0"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      />
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-yellow-300/20 to-yellow-400/30 rounded-full blur-3xl pointer-events-none z-0"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-left mt-56 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl font-light text-gray-800 mb-2 sm:mb-3 md:mb-4"
            variants={itemVariants}
          >
            Contact Us
          </motion.h1>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900"
            variants={itemVariants}
          >
            Get in Touch with Us
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10"
            variants={itemVariants}
          >
            <motion.div 
              className="prose prose-gray max-w-none"
              variants={itemVariants}
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Contact Falco Solutions today and let's start creating your digital success story. Our team is 
                ready to assist you with web design and development services. Whether you have a project 
                in mind or simply want to explore how we can help your business thrive online, we're here 
                for you. With our expertise and commitment to excellence, we'll bring your vision to life and 
                deliver outstanding results. Reach out to us now and let's discuss your next steps towards 
                a pixel-perfect digital solution.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8"
              variants={containerVariants}
            >
              {/* Phone Number */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Phone Number</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-base sm:text-lg">+91-7894721848</p>
                    <p className="text-gray-700 text-base sm:text-lg">+91-889744538</p>
                  </div>
                </div>
              </motion.div>

              {/* Email Address */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-700 text-base sm:text-lg">support@falcosolutions.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8"
            variants={formVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone number"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 text-base sm:text-lg resize-none"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;