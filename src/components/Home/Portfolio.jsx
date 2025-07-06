import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import WorkWithUs from './WorkWithUs';

// Optimized Portfolio Item Component
const PortfolioItem = ({ item, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        group cursor-pointer transition-all duration-700 ease-out transform
        ${index === 0 || index === 3 ? 'md:mt-0' : 'md:mt-16'}
        ${isVisible
          ? 'translate-x-0 opacity-100'
          : `${isLeft ? '-translate-x-24 md:-translate-x-32' : 'translate-x-24 md:translate-x-32'} opacity-0`
        }
      `}
      style={{
        willChange: isVisible ? 'auto' : 'transform, opacity',
        transform: isVisible ? 'translate3d(0, 0, 0)' : undefined,
      }}
    >
      <div className="mb-4">
        <img src="/curl.svg" alt="Curl Icon" className="w-8 h-8 text-gray-400" />
      </div>
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-xl text-gray-600">{item.subtitle}</p>
      </div>
      <div
        className={`
          relative aspect-[4/3] rounded-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2
          ${item.type === 'mobile' ? 'bg-black' : 'bg-gray-100'}
        `}
      >
        {item.type === 'mobile' ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-lg">{item.subtitle}</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <h4 className="text-gray-900 text-2xl md:text-3xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-lg">{item.subtitle}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    { id: 1, title: "Gift", subtitle: "Mobile App", type: "mobile" },
    { id: 2, title: "AMZ", subtitle: "Web Application", type: "web" },
    { id: 3, title: "AMZ Web", subtitle: "Application", type: "web" },
    { id: 4, title: "Gift", subtitle: "Mobile App", type: "mobile" },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-32 xl:px-48">
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-purple-700/60 via-indigo-700/50 to-blue-700/50 rounded-full blur-3xl opacity-70 pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-pink-700/50 via-purple-700/50 to-blue-700/50 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-pink-500/40 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
          <div className="lg:max-w-md">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">OUR WORK</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Portfo
              <span className="inline-block bg-gray-700 text-white px-2 py-1 rounded-md transform -rotate-2">lio</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl mollis arcu nisl. Ipsum nunc qenean eleifend sed et neque vivamus.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center group">
              VIEW WORK
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Delivered */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? <CountUp end={382} duration={2} /> : 0} <span className="text-2xl">+</span>
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-1">Projects Delivered</p>
              <p className="text-gray-600">and counting more..</p>
            </div>

            {/* Active (Square) */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-900 transform rotate-45 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900"></div>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? <CountUp end={14} duration={1.5} /> : 0} <span className="text-2xl">+</span>
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-1">Active Projects</p>
              <p className="text-gray-600">and counting more..</p>
            </div>

            {/* Active (Triangle) */}
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-l-[52px] border-r-[52px] border-b-[68px] border-l-transparent border-r-transparent border-b-gray-900"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? <CountUp end={168} duration={2} /> : 0} <span className="text-2xl">+</span>
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-1">Active Projects</p>
              <p className="text-gray-600">and counting more..</p>
            </div>
          </div>
        </div>
      </div>
      <WorkWithUs />
    </section>
  );
};

export default Portfolio;
