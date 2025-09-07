import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import Navigation from '../utils/Navigation';
import Footer from '../components/Home/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mx-auto">
          {/* Animated 404 display */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.div 
              className="text-9xl font-bold text-indigo-600 mb-4 flex justify-center items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block">4</span>
              <motion.span 
                className="inline-block mx-2 text-yellow-500"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                <FaExclamationTriangle className="inline-block text-7xl" />
              </motion.span>
              <span className="inline-block">4</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Oops! Page Not Found
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, let's get you back on track.
            </motion.p>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <FaHome className="text-lg" />
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300 border border-gray-300 shadow-md hover:shadow-lg"
            >
              <FaArrowLeft className="text-lg" />
              Go Back
            </button>
            
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <FaSearch className="text-lg" />
              Get Help
            </Link>
          </motion.div>

          {/* Additional helpful content */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">While you're here...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Check out our services</h3>
                <p className="text-sm text-blue-600">We offer web development, mobile apps, and more.</p>
                <Link to="/services" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-block mt-2">
                  Explore services →
                </Link>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-medium text-purple-800 mb-2">Learn about us</h3>
                <p className="text-sm text-purple-600">Discover our story and what makes us different.</p>
                <Link to="/about" className="text-purple-600 hover:text-purple-800 text-sm font-medium inline-block mt-2">
                  About us →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="hidden md:block">
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-14 h-14 bg-blue-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-10 w-10 h-10 bg-purple-200 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;