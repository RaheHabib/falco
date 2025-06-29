import React, { useState, useEffect } from 'react';
import StreamingText from '@utils/StreamingText';

// Navigation component
const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        <div className="flex-shrink-0">
          <div className="text-xl font-bold text-gray-900">Logo</div>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact Us</a>
          </div>
        </div>
        
        <button className="bg-black text-white px-6 py-2 rounded-none hover:bg-gray-800 transition-colors font-medium">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          Hire Us, Now
        </button>
      </div>
    </nav>
  );
};

// Client logos component
const ClientLogos = () => {
  const logos = [
    "logoipsum", "logoipsum", "logoipsum", "logoipsum", 
    "logoipsum", "logoipsum", "logoipsum", "logoipsum"
  ];

  return (
    <div className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
      <div className="flex items-center justify-center space-x-6 sm:space-x-8 lg:space-x-12 overflow-hidden">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Hero component
const Hero = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Circular Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow circle */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-500/30 to-gray-900/40 blur-3xl"></div>
        </div>
        
        {/* Secondary glow */}
        <div className="absolute top-1/2 left-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/20 blur-2xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left pt-16 lg:pt-0">
              {/* Main Heading with Streaming Effect */}
              <div className="space-y-2 sm:space-y-4 relative">
                {/* Large background glow behind all text */}
                <div className="absolute -inset-12 sm:-inset-16 lg:-inset-20 xl:-inset-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/15 via-indigo-500/20 to-blue-600/10 blur-3xl"></div>
                </div>
                
                <h1 className="relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                  {startAnimation && (
                    <div className="space-y-1 sm:space-y-2">
                      <div className="relative">
                        <StreamingText 
                          text="Evolve" 
                          delay={150}
                          className="block relative z-10"
                        />
                      </div>
                      
                      <div className="relative">
                        <StreamingText 
                          text="Transform" 
                          delay={120}
                          className="block relative z-10"
                        />
                      </div>
                      
                      <div className="relative">
                        <StreamingText 
                          text="Accelerate" 
                          delay={100}
                          className="block relative z-10"
                        />
                      </div>
                    </div>
                  )}
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="space-y-2 max-w-md mx-auto lg:mx-0">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  specialised in crafting human —
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  centric digital experiences.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <button className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Content - Dark Shape */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 overflow-visible">
              <div
                className="bg-[#191A2E]"
                style={{
                  width: '500px',
                  height: '700px',
                  borderTopLeftRadius: '350px',
                  borderBottomLeftRadius: '350px',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Logos */}
      <ClientLogos />
    </div>
  );
};

export default Hero;