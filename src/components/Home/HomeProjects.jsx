import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import smartscout from '../../assets/smartscout.webp';
// import smartscout_web2 from '../../assets/smartscout_web2.jpeg';
import power1 from '../../assets/power1.jpg';
import power2 from '../../assets/power2.jpg';
import power3 from '../../assets/power3.jpg';
import power4 from '../../assets/power4.jpg';
import nigotis from '../../assets/nigotis.jpeg';
import vid from '../../assets/vid.mp4';

const HomeProjects = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  
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
      title: "Nigotis.com",
      subtitle: "Web Application",
      type: "web",
      description: "Nigotis.com is a web-based accounting and business automation platform designed for growing businesses. It helps companies manage their finances, track expenses, generate invoices, and automate day-to-day operations with ease. Built with a focus on simplicity and scalability, Nigotis empowers small and medium-sized businesses to take control of their financial processes and improve efficiency.",
      image: nigotis
    },
    {
      id: 3,
      title: "GestureSurfer AI",
      subtitle: "AI Hand Gesture Gaming",
      type: "web",
      description: "GestureSurfer AI is an innovative web application that uses computer vision and machine learning to transform hand movements into game controls. Players can navigate the subway surfer game environment using natural hand gestures, creating an immersive, controller-free gaming experience. Our solution leverages TensorFlow.js and pose detection algorithms to accurately track hand movements in real-time through standard webcams.",
      video: vid,
      fallbackImage: power1
    },
    {
      id: 4,
      title: "Power BI dashboard",
      subtitle: "Power BI",
      type: "mobile",
      description: "Designed a comprehensive Power BI dashboard analyzing Craster's 2022–2023 sales, customer, and product data across six datasets. Delivered an executive summary with key KPIs—total sales, YoY growth, regional performance, and profit margins. Conducted deep-dive analysis on product trends, customer behavior, and lead generation to support decision-making for sales, marketing, and product teams. Utilized DAX, Power Query, and data modeling to present clear, actionable insights through interactive visualizations.",
      images: [power1, power2, power3, power4],
    }
  ];

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
        // Try to play the video programmatically
        video.play().catch(e => {
          console.log("Autoplay prevented:", e);
          // User interaction will be required to play the video
        });
      };
      
      const handleError = () => {
        setVideoError(true);
        console.error("Video failed to load");
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Preload the video for better performance
      video.preload = 'auto';
      video.load();
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

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

  // Function to handle next image in carousel
  const nextImage = (e, itemId) => {
    e.stopPropagation();
    const item = portfolioItems.find(i => i.id === itemId);
    setActiveCarouselIndex((prevIndex) => 
      (prevIndex + 1) % item.images.length
    );
  };

  // Function to handle previous image in carousel
  const prevImage = (e, itemId) => {
    e.stopPropagation();
    const item = portfolioItems.find(i => i.id === itemId);
    setActiveCarouselIndex((prevIndex) => 
      (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  // Function to manually play video (for when autoplay is blocked)
  const playVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Play failed:", error);
      });
    }
  };

  return (
    <section>
        {/* Header Section */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="lg:max-w-xl">
            <motion.p 
              className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-2"
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
                className="inline-block bg-gray-700 text-white px-1 py-1 sm:px-2 sm:py-1 rounded-md transform -rotate-2"
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
              className="text-sm sm:text-base italic lg:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "At Falco Solutions LTD, we turn ideas into powerful digital products. Our portfolio reflects a diverse range of projects — from mobile apps to AI-powered platforms, blockchain solutions, and scalable SaaS applications. Each project is built with innovation, performance, and growth in mind, helping businesses launch, scale, and thrive in the digital era."
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
                <img src="curl.svg" alt="Curl Icon" className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
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

              {/* Project Media */}
              <div 
                className={`
                  relative aspect-[4/3] rounded-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2
                  ${item.type === 'mobile' ? 'bg-black' : 'bg-gray-100'}
                `}
              >
                {/* Video for GestureSurfer AI */}
                {item.id === 3 && (
                  <>
                    <div className="relative w-full h-full">
                      {/* Loading spinner */}
                      {!videoLoaded && !videoError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      
                      {/* Video element */}
                      <video 
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={item.fallbackImage}
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Play button overlay if video isn't playing */}
                      {(!videoLoaded || videoError) && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                          onClick={playVideo}
                        >
                          {videoError ? (
                            <div className="text-center text-white p-4">
                              <p className="mb-2">Video failed to load</p>
                              <button className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition-colors">
                                Try Again
                              </button>
                            </div>
                          ) : (
                            <div className="w-16 h-16 bg-orange-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Overlay with Description */}
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center p-6 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-white italic text-center text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        "{item.description}"
                      </motion.p>
                    </motion.div>
                  </>
                )}
                
                {/* Carousel for Power BI dashboard */}
                {item.id === 4 && (
                  <>
                    <div className="relative w-full h-full">
                      {/* Main Image */}
                      <img 
                        src={item.images[activeCarouselIndex]}
                        alt={`${item.title} screenshot ${activeCarouselIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Device frame for mobile */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-5/6 border-8 border-black rounded-3xl" />
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button 
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full z-50 p-2 hover:bg-black/70 transition-colors"
                        onClick={(e) => prevImage(e, item.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        className="absolute z-50 right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                        onClick={(e) => nextImage(e, item.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {item.images.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              idx === activeCarouselIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCarouselIndex(idx);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Overlay with Description */}
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center p-6 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <motion.p 
                          className="text-white italic text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-2"
                        >
                          "{item.description}"
                        </motion.p>
                      </div>
                    </motion.div>
                  </>
                )}
                
                {/* Regular Image for other items */}
                {item.id !== 3 && item.id !== 4 && (
                  <>
                    <img 
                      src={item.image}
                      alt={`${item.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Device frame based on type */}
                    {item.type === 'mobile' && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-5/6 border-8 border-black rounded-3xl" />
                      </div>
                    )}
                    
                    {/* Hover Overlay with Description */}
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center p-6 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-white italic text-center text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        "{item.description}"
                      </motion.p>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default HomeProjects;