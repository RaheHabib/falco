import React from 'react';
import ceo from '../../assets/ceo.jpg';

const GroupOfExperts = () => {
  return (
    <div className="relative bg-white py-12 md:py-16 lg:py-20">
     <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
              We are a <span className="text-orange-400">group of experts</span> looking to help companies leverage technology to do more than they had ever thought possible.
            </h2>
            
            {/* Team Image */}
            <div className="mb-8 md:mb-12">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team of experts working together in a modern office environment" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - CEO Testimonial */}
          <div className="lg:pl-8">
            {/* CEO Testimonial - Mobile: Horizontal layout, Desktop: Vertical */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 sm:gap-6 lg:gap-6">
              {/* CEO Image */}
              <div className="flex-shrink-0">
                <img 
                  src={ceo}
                  alt="Abdul Moiz, CEO of Falco Solutions" 
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content Container */}
              <div className="flex-1 lg:w-full">
                {/* Testimonial Content */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We always focus on technical excellence
                  </p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Wherever you're going, we bring ideas and excitement
                  </p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We're consultants, guides, and partners for brands
                  </p>
                </div>

                {/* CEO Info */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    Abdul Moiz
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    CEO, Falco Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupOfExperts;