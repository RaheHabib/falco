import React from 'react';

const CareersSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 lg:mb-8 leading-tight">
              Careers with Falco Solutions
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Join us for exciting career opportunities in web design and development. Work collaboratively, contribute to cutting-edge projects, and unleash your potential. We value innovation, growth, and creativity. Whether experienced or starting your career, make your mark with pixel-perfect designs and unmatched web solutions.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="careerSection.png" 
                alt="Careers with Falco Solutions - Film production scene" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* YouTube overlay badge */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;