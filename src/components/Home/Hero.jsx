import React, { useState, useEffect } from 'react';
import StreamingText from '@utils/StreamingText';
import smart_logo from '../../assets/smart_logo.svg'
import capital_logo from '../../assets/capital_logo.svg'
import makhbu_logo from '../../assets/makhbu_logo.svg'
import prime_logo from '../../assets/prime_logo.svg'

// Client logos component
const ClientLogos = () => {
  const logos = [
    smart_logo,
    capital_logo,
    makhbu_logo,
    prime_logo,
    smart_logo,
    capital_logo,
    makhbu_logo,
    prime_logo
  ];

  return (
    <div className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
      <div className="flex items-center justify-center space-x-6 sm:space-x-8 lg:space-x-12 overflow-hidden">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-8 sm:h-10 lg:h-12 object-contain"
            />
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

            </div>
            
            {/* Right Content - Dark Shape */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 z-0 overflow-visible">
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
      {/* White transition to blend into About */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-0" />

    </div>
  );
};

export default Hero;