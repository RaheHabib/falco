import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import smartscout from '../../assets/smartscout.webp';
import smartscout_web2 from '../../assets/smartscout_web2.jpeg';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';
import WorkWithUs from './WorkWithUs';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import HomeProjects from './HomeProjects';

const Portfolio = () => {
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const portfolioItems = [
    {
      id: 1,
      title: "Smart Scout",
      subtitle: "Mobile App",
      type: "mobile",
      description: "Smart Scout Mobile is a cross-platform Flutter application that empowers young athletes to build their sports portfolio on-the-go. Players can upload training videos, match highlights, and performance statistics directly from their mobile devices. The app provides seamless connectivity with the web platform, instant notifications for scout interest, and tools to track skill development over time. With its intuitive interface, athletes can maintain their sporting profile anytime, anywhere.",
      image: smartscout
    },
    {
      id: 2,
      title: "Smart Scout",
      subtitle: "Web Application",
      type: "web",
      description: "Smart Scout Web is a comprehensive talent showcase platform built with React.js that provides young athletes with a professional space to display their skills, achievements, and sports portfolios. The platform enables scouts and coaches to discover emerging talent through advanced filtering, video highlights, performance metrics, and detailed player profiles. Our full-stack solution features secure authentication, real-time messaging, and a robust admin dashboard for managing recruitment processes.",
      image: smartscout_web2
    },
    {
      id: 3,
      title: "E-commerce",
      subtitle: "Web Application",
      type: "web",
      description: "Makhbu is a modern e-commerce website designed to provide a seamless online shopping experience. The platform features a clean and intuitive interface where users can browse products, add items to their cart, and securely complete purchases. It includes essential functionalities such as product search and filtering, category-based browsing, user authentication, and responsive design for both desktop and mobile devices. Makhbu was built with a focus on performance, scalability, and user-friendly navigation, making it a complete solution for online retail.",
      image: image
    },
    {
      id: 4,
      title: "E-commerce",
      subtitle: "Mobile App",
      type: "mobile",
      description: "This project is a fully functional mobile application developed in Kotlin, designed with a focus on performance, reliability, and a smooth user experience. The app features a modern UI built with Jetpack Compose, providing intuitive navigation and responsiveness across devices. It integrates essential mobile functionalities such as authentication, API connectivity, and real-time data handling, making it scalable and adaptable for different use cases. The project demonstrates strong expertise in Android development, clean architecture, and Kotlin best practices.",
      image: image2
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
      
     <HomeProjects/>

       <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Section */}
        <motion.div 
          ref={statsRef} 
          className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Delivered */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsInView ? <CountUp end={382} duration={2} /> : 0} <span className="text-xl sm:text-2xl">+</span>
              </h3>
              <p className="text-base sm:text-lg font-medium text-gray-900 mb-1">Projects Delivered</p>
              <p className="text-sm sm:text-base text-gray-600">and counting more..</p>
            </div>

            {/* Active (Square) */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 transform rotate-45 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900"></div>
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsInView ? <CountUp end={14} duration={1.5} /> : 0} <span className="text-xl sm:text-2xl">+</span>
              </h3>
              <p className="text-base sm:text-lg font-medium text-gray-900 mb-1">Active Projects</p>
              <p className="text-sm sm:text-base text-gray-600">and counting more..</p>
            </div>

            {/* Active (Triangle) */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-l-[32px] sm:border-l-[52px] border-r-[32px] sm:border-r-[52px] border-b-[42px] sm:border-b-[68px] border-l-transparent border-r-transparent border-b-gray-900"></div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsInView ? <CountUp end={168} duration={2} /> : 0} <span className="text-xl sm:text-2xl">+</span>
              </h3>
              <p className="text-base sm:text-lg font-medium text-gray-900 mb-1">Active Projects</p>
              <p className="text-sm sm:text-base text-gray-600">and counting more..</p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      <WorkWithUs />

    </section>
  );
};

export default Portfolio;