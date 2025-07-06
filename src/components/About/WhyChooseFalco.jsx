import React from 'react';

const WhyChooseFalco = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
              Why Choose Falco Solutions?
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Falco Solutions is a team of experienced web designers and developers who are passionate about creating beautiful and effective landing pages. We understand the importance of first impressions, and we know that a well-designed landing page can make all the difference in converting visitors into customers.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <button className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors duration-200">
                Know us more
              </button>
            </div>
          </div>

          {/* Right Column - Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-full">
              <img 
                src="graphic.png" 
                alt="Falco Solutions team working on web development projects" 
                className="w-full h-auto max-w-lg lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFalco;