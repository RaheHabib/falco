import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.query) {
      toast.error('Please fill in all required fields (Name, Email, and Query)');
      setIsSubmitting(false);
      return;
    }
    
    // Send email using EmailJS
    emailjs.send(
      'service_4swfz4p',     // Replace with your EmailJS service ID
      'template_qdfkjit',    // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        contact_number: formData.contact,
        message: formData.query,
        to_email: 'talhaazfar4722@gmail.com'
      },
      'M_CTarJqjrkNvsez5'      // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        contact: '',
        query: ''
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      toast.error('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const graphicVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute left-0 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-70 pointer-events-none z-0"
        style={{ top: "20rem" }}
        animate={pulseAnimation}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            If you've made it this far down the page,
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear about your project, reach out to us for a no-obligation call.
          </motion.p>
        </motion.div>

        {/* Main Content - Form and Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Side - Form */}
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              <motion.input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                variants={itemVariants}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.textarea
                name="query"
                placeholder="Query*"
                value={formData.query}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300 resize-none"
                variants={itemVariants}
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "0 8px 25px -8px rgba(0, 0, 0, 0.1)" : "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Us'}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Double Capsule Graphic */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={graphicVariants}
          >
            <motion.div 
              className="relative mx-8"
              animate={floatingAnimation}
            >
              {/* Large outer capsule */}
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-60 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Inner capsule */}
                <motion.div 
                  className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-80 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Innermost element */}
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-500 rounded-full opacity-60"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Additional decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                animate={{
                  y: [-5, 5, -5],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-40"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                animate={{
                  y: [5, -5, 5],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}