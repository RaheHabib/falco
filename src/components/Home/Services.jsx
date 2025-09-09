import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase";

const db = getFirestore(app);

const Services = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // firebase
  const [services, setServices] = useState([]);
  const printRef = useRef();

  const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);



  // Technology categories with details
  const technologyCategories = {
    "Web & App Frameworks": ["React", "Angular", "Next.js", "Node.js", "Flutter", "React Native"],
    "AI & Data": ["Python", "TensorFlow", "PyTorch", "Analytics Platforms"],
    "Blockchain": ["Ethereum", "Solidity", "Web3"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  };

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
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

  const expandVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
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

      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* Left Section */}
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:ml-12"
              variants={contentVariants}
            >
              {/* Technology Header - Clickable */}
              <motion.div
                className="cursor-pointer"
                onClick={() => toggleSection('technology')}
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${expandedSection === 'technology'
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-500 text-white'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {expandedSection === 'technology' ? (
                      <motion.svg
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                  </motion.div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                        Technology
                      </h2>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 ml-1 sm:ml-2">
                        WE USE
                      </span>
                    </div>
                    {expandedSection !== 'technology' && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        At Falco Solutions LTD, we combine modern frameworks and intelligent tools to deliver future-ready solutions.
                      </p>
                    )}
                  </div>
                </div>

                {/* Technology Expandable Content */}
                <AnimatePresence>
                  {expandedSection === 'technology' && (
                    <motion.div
                      className="ml-4 sm:ml-12 mt-4 space-y-4 overflow-hidden"
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p className="text-sm sm:text-base text-gray-600 mb-4">
                        At Falco Solutions LTD, we combine modern frameworks and intelligent tools to deliver future-ready solutions:
                      </p>
                      {Object.entries(technologyCategories).map(([category, items]) => (
                        <div key={category} className="mb-4">
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((item, index) => (
                              <span
                                key={index}
                                className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Services Section - Clickable */}
              <motion.div
                className="cursor-pointer mt-6"
                onClick={() => toggleSection('services')}
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${expandedSection === 'services'
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-500 text-white'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {expandedSection === 'services' ? (
                      <motion.svg
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                  </motion.div>
                  <div className="flex flex-col">
                    <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                      Services
                    </h3>
                    {expandedSection !== 'services' && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        From concept to deployment, we offer end-to-end solutions tailored to your business needs.
                      </p>
                    )}
                  </div>
                </div>

                {/* Services Expandable Content */}
                <AnimatePresence>
                  {expandedSection === 'services' && (
                    <motion.div
                      className="ml-4 sm:ml-12 mt-4 space-y-2 overflow-hidden"
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p className="text-sm sm:text-base text-gray-600 mb-4">
                        From concept to deployment, we offer end-to-end solutions tailored to your business needs:
                      </p>
                      {/* Services List */}
                      <div ref={printRef}>
                        {services.length > 0 ? (
                          <ul className="list-disc pl-6 space-y-2">
                            {services.map((service) => (
                              <li key={service.id} className="text-sm sm:text-base md:text-lg">
                                {service.name}
                                {/* <p className="text-gray-600">{service.description}</p> */}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500">No services available.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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