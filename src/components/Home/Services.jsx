import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const services = [
    'Software',
    'Mobile Apps',
    'Web Design',
    'Front-End',
    'Back-End'
  ];

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = windowHeight - rect.top;
      const scrollHeight = windowHeight + rect.height;

      const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentTransform = {
    transform: `translateX(${(-100 + scrollProgress * 90)}px)`,
    opacity: scrollProgress
  };

  return (
    <section ref={sectionRef} className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden">
      {/* Central Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-[10rem] sm:h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full bg-gradient-to-br from-purple-400/15 via-indigo-500/20 to-blue-600/10 blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Section - Custom Scroll Animation */}
            <div
              ref={contentRef}
              style={contentTransform}
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:ml-48 transition-transform duration-300 ease-out"
            >
              {/* Technology Header */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-400 rounded-full flex-shrink-0"></div>
                <div className="flex items-baseline">
                  <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                    Technology
                  </h2>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 ml-1 sm:ml-2">
                    WE USE
                  </span>
                </div>
              </div>

              {/* Services Section */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                    Services
                  </h3>
                </div>
                <div className="space-y-1 sm:space-y-2 ml-4 sm:ml-12 md:ml-12">
                  {services.map((service, index) => (
                    <div key={index} className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-700 font-medium">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - SVG Graphic */}
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src="/Services shape.svg"
                  alt="Technology Services Graphic"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
