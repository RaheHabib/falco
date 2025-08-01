import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  FileText, 
  Settings, 
  PenTool, 
  ShoppingBag, 
  Share2, 
  Package, 
  Smartphone, 
  Cpu, 
  Palette, 
  Monitor 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, subtitle, isHighlighted = false, index }) => {
  return (
    <motion.div 
      className={`
        relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer max-w-xs mx-auto w-full
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
    >
      <div className="flex flex-col items-center text-center space-y-3">
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
      </div>
    </motion.div>
  );
};

const ServicesComponent = () => {
  const productionServices = [
    {
      icon: Network,
      title: "Product Road Maps &",
      subtitle: "Scoping"
    },
    {
      icon: FileText,
      title: "Legal Documentation &",
      subtitle: "briefs Creation"
    },
    {
      icon: Settings,
      title: "Content Engineering",
      subtitle: "& Creation"
    },
    {
      icon: PenTool,
      title: "Content Writing & Script Writing",
      subtitle: "Services"
    }
  ];

  const mediaServices = [
    {
      icon: ShoppingBag,
      title: "SEO for",
      subtitle: "ecommerce"
    },
    {
      icon: Share2,
      title: "SEO for Affiliate",
      subtitle: "Marketing"
    },
    {
      icon: Package,
      title: "SEO for B2B",
      subtitle: "Products"
    },
    {
      icon: Share2,
      title: "Social media",
      subtitle: "Optimization",
      isHighlighted: false
    }
  ];

  const designServices = [
    {
      icon: Smartphone,
      title: "Mobile & App",
      subtitle: "development"
    },
    {
      icon: Cpu,
      title: "Application Optimizations and",
      subtitle: "AI Integration"
    },
    {
      icon: Palette,
      title: "User Interfaces and User Experience",
      subtitle: "Designs"
    },
    {
      icon: Monitor,
      title: "Websites and Front end",
      subtitle: "Development"
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
            Media & Marketing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mediaServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
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
            Design & Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {designServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
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