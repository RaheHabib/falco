import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow circle */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-500/30 to-gray-900/40 blur-3xl"></div>
        </div>
        
        {/* Secondary glow */}
        <div className="absolute top-1/2 left-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-600/20 blur-2xl"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Person avatars positioned around the text */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Top left person */}
          <div className="absolute -top-18 -left-18 sm:top-42 sm:-left-12 md:-top-46 md:-left-20 lg:top-10 lg:-left-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-pink-200 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/person1.png" alt="Person 1" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover" />
            </div>
          </div>

          {/* Top right person */}
          <div className="absolute -top-8 -right-4 sm:-top-12 sm:-right-12 md:-top-16 md:-right-16 lg:top-20 lg:-right-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-200 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/person2.png" alt="Person 2" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover" />
            </div>
          </div>

          {/* Bottom left person */}
          <div className="absolute -bottom-8 -left-2 sm:-bottom-12 sm:-left-12 md:-bottom-20 md:-left-16 lg:bottom-10 lg:-left-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-cyan-200 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/person3.png" alt="Person 3" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover" />
            </div>
          </div>

          {/* Bottom right person */}
          <div className="absolute -bottom-8 -right-0 sm:-bottom-12 sm:-right-12 md:-bottom-16 md:-right-16 lg:bottom-20 lg:-right-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-pink-200 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/person4.png" alt="Person 4" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover" />
            </div>
          </div>

          {/* Central content */}
          <div className="text-center py-16 sm:py-20 md:py-24 lg:py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight">
              <span className="block">We Create a</span>
              <span className="block">future you</span>
              <span className="block">believe in</span>
            </h1>
            
            <div className="mt-8 sm:mt-12 md:mt-16">
              <button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                See Our Previous Work
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-[10%] border-t border-gray-300"></div>
      </div>
      
      {/* White transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-10"></div>
    </div>
  );
};

export default Hero;