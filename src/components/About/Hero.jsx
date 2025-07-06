import React from 'react';
import { BarChart3, Users, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <div>
      <div className="relative bg-white px-4 py-64 sm:py-30 md:py-20">
      <div className="absolute left-0 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto">
          {/* Main Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unleash Your Potential with{' '}
                <span className="text-purple-600">Falco Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Captivate and convert with stunning landing pages. Falco Solutions 
                drives results and scales your business. Partner with us for captivating 
                design and conversion-driven strategies on your path to success.
              </p>
              
            <div className="flex justify-center md:justify-start">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Today!
              </button>
            </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="man_working.png" 
                  alt="Man working at desk with laptop" 
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                />
              </div>
            </div>
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
                Boost Your Conversions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our expert web designers craft visually stunning 
                and conversion-optimized landing pages, 
                driving more sales and revenue for your True 
                business.
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
                Create a memorable user experience with 
                intuitive layouts, compelling visuals, and 
                seamless navigation. Keep visitors hooked and 
                encourage repeat visits.
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
                Stay Ahead of the Competition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With our data-driven approach, A/B testing, 
                and continuous optimization, you'll always be 
                one step ahead of your competitors, unlocking 
                your business's true potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;