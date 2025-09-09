import React from 'react';
import { BarChart3, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
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
      y: 30
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 40
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

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
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

  const navigate = useNavigate();

  const handleSeeWork = () => {
    navigate("/#work");
  };

  return (
    <div>
      <div className="relative bg-white px-4 py-64 sm:py-30 md:py-20 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute left-0 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl pointer-events-none z-0"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />

        <div className="max-w-7xl mx-auto">
          {/* Main Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Build, Launch & Grow with {' '}
                <span className="text-purple-600">Falco Solutions</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                UK-based team building websites, mobile apps & SaaS with AI, data analytics, blockchain and SEO - from research to launch and growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-5 md:justify-start"
                variants={itemVariants}
              >
                <Link to="/contact">
                <motion.div
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get a free strategy call
                </motion.div>
                </Link>
                <motion.button
                onClick={handleSeeWork}
                  className="border-2 border-purple-600 hover:bg-gray-900 hover:text-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  See our work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                <motion.img
                  src="man_working.png"
                  alt="Man working at desk with laptop"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
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

      {/* Features Section */}
      <div className="bg-white py-8 md:py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Boost Your Conversions */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex justify-center md:justify-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <BarChart3 className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Boost Conversions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-performing funnels, SEO and speed optimisations that turn visitors into customers.
              </p>
            </div>

            {/* Engage Your Audience */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex justify-center md:justify-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Engage Your Audience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clean UI, intuitive flows and fast load times—built with React, Next.js and Flutter.
              </p>
            </div>

            {/* Stay Ahead of the Competition */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex justify-center md:justify-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Lightbulb className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Stay Ahead
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI features, analytics and A/B testing that reveal opportunities and keep you ahead of competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;