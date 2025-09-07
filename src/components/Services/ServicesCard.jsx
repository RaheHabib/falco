import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMap, 
  FiCode, 
  FiCloud, 
  FiCpu,
  FiSearch,
  FiTrendingUp,
  FiMail,
  FiShare2,
  FiFileText,
  FiDatabase,
  FiLayout,
  FiTool
} from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, subtitle, hoverText, isHighlighted = false, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`
        relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer max-w-xs mx-auto w-full h-48
        ${isHighlighted 
          ? 'border-black bg-blue-50/50' 
          : 'border-black bg-white hover:border-gray-800'
        }
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center space-y-3 h-full justify-center">
        {!isHovered ? (
          <>
            <motion.div 
              className="p-3 rounded-full bg-black"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-tight">
                  {subtitle}
                </p>
              )}
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-700 text-sm p-2"
          >
            {hoverText}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ServicesComponent = () => {
  const productionServices = [
    {
      icon: FiMap,
      title: "Product Road Maps &",
      subtitle: "Scoping",
      hoverText: "Strategic planning and defining product vision, features, and timeline for successful development."
    },
    {
      icon: FiCode,
      title: "Web & Mobile App",
      subtitle: "Development",
      hoverText: "Full-stack development of responsive web applications and native/cross-platform mobile apps."
    },
    {
      icon: FiCloud,
      title: "Cloud Deployment",
      subtitle: "& DevOps",
      hoverText: "Seamless deployment to cloud platforms with CI/CD pipelines and infrastructure automation."
    },
    {
      icon: FiCpu,
      title: "Application Optimization",
      subtitle: "& AI Integration",
      hoverText: "Performance enhancement and integration of AI/ML capabilities into existing applications."
    }
  ];

  const mediaServices = [
    {
      icon: FiSearch,
      title: "SEO for SaaS",
      subtitle: "& Digital Product",
      hoverText: "Comprehensive SEO strategies tailored specifically for SaaS products and digital offerings."
    },
    {
      icon: FiTrendingUp,
      title: "Performance Marketing",
      subtitle: "(PPC & Ads)",
      hoverText: "Data-driven paid advertising campaigns across search, social media, and display networks."
    },
    {
      icon: FiMail,
      title: "Email & Marketing",
      subtitle: "Automation",
      hoverText: "End-to-end email marketing solutions with automated workflows and personalized content."
    },
    {
      icon: FiShare2,
      title: "Social media",
      subtitle: "Optimization",
      hoverText: "Strategic social media management, content planning, and community engagement."
    }
  ];

  const designServices = [
    {
      icon: FiFileText,
      title: "Legal Documentation",
      subtitle: "& Briefs",
      hoverText: "Preparation of comprehensive legal documents, contracts, and project briefs."
    },
    {
      icon: FiDatabase,
      title: "Content Engineering",
      subtitle: "& Knowledge Base",
      hoverText: "Structured content development and knowledge management systems for better information architecture."
    },
    {
      icon: FiLayout,
      title: "User Experience Design",
      subtitle: "(UI/UX) Designs",
      hoverText: "User-centered design approach creating intuitive interfaces and seamless user experiences."
    },
    {
      icon: FiTool,
      title: "Ongoing Product",
      subtitle: "Support",
      hoverText: "Continuous maintenance, updates, and technical support for your digital products."
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Orange glow effect */}
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's get started on something great
          </h1>
        </motion.div>

        {/* Production Services */}
        <motion.div 
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Production Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {productionServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                hoverText={service.hoverText}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Media & Marketing Services */}
        <motion.div 
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Growth & Marketing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mediaServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                hoverText={service.hoverText}
                isHighlighted={service.isHighlighted}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Design & Development Services */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Operations & Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {designServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                hoverText={service.hoverText}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesComponent;