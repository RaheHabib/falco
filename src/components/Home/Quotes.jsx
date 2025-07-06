import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Lee Davis",
      content: "Lorem ipsum dolor sit amet consectetur. In et arcu mauris ultricies pulvinar. Ut morbi amet ipsum lectus tristique sapien sed enim feugiat adipiscing non pulvinar a. Ultricies sem commodo a malesuada elementum morbi a in."
    },
    {
      id: 2,
      name: "Daniel Corwin",
      content: "Lorem ipsum dolor sit amet consectetur. Sed ut semper sodales id fringilla posuere egestas. Eget ultrices adipiscing augue urna."
    },
    {
      id: 3,
      name: "Bonnie Upton",
      content: "Lorem ipsum dolor sit amet consectetur. Sed quam sed duis commodo adipiscing ipsum et. Arcu urna sit lectus malesuada convallis integer et. Tempor velit euismod feugiat in proin habitant imperdiet vulputate."
    }
  ];

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optimized navigation functions with animation debouncing
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, testimonials.length]);

  // Memoized testimonial states to prevent unnecessary recalculations
  const testimonialStates = useMemo(() => {
    return testimonials.map((_, index) => ({
      isActive: index === currentIndex,
      isPrev: index === (currentIndex - 1 + testimonials.length) % testimonials.length,
      isNext: index === (currentIndex + 1) % testimonials.length,
      index
    }));
  }, [currentIndex, testimonials.length]);

  // Memoized quote icon component
  const QuoteIcon = useMemo(() => ({ size = 'w-4 h-4', rotate = false }) => (
    <svg className={`${size} text-white ${rotate ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
    </svg>
  ), []);

  return (
    <div 
      ref={sectionRef}
      className={`relative py-16 px-4 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements - optimized with transform3d */}
      <div 
        className="absolute w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] left-20 top-30 sm:left-30 sm:top-60 z-0 pointer-events-none"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <img
          src="/quotes.svg"
          alt="Decorative quotes"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      {/* Bottom right glow - optimized with will-change */}
      <div 
        className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-tr from-blue-500/50 via-indigo-600/50 to-purple-700/50 rounded-full blur-3xl opacity-60 pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Animate on scroll */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-2">
            OUR COMMUNITY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Community love{' '}
            <span className="bg-gray-700 text-white px-3 py-1 rounded">
              us
            </span>
          </h2>
        </div>

        {/* Navigation arrows - Animate on scroll */}
        <div className={`absolute right-0 top-16 flex space-x-2 z-20 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials grid - Optimized with memoized states */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {testimonialStates.map(({ isActive, isPrev, isNext, index }) => {
            const testimonial = testimonials[index];
            
            return (
              <div
                key={testimonial.id}
                className={`
                  relative transition-all duration-500 transform
                  ${isActive ? 'scale-105 z-10' : isPrev || isNext ? 'scale-100 z-5' : 'scale-95 opacity-50 md:opacity-100'}
                  ${isVisible ? 'translate-y-0' : 'translate-y-8'}
                `}
                style={{ 
                  transitionDelay: `${600 + index * 100}ms`,
                  willChange: isAnimating ? 'transform' : 'auto'
                }}
              >
                {/* Quote icon - Top */}
                <div className="absolute -top-4 left-6 z-10">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <QuoteIcon size="w-4 h-4" />
                  </div>
                </div>

                {/* Testimonial card */}
                <div className="bg-white rounded-lg p-8 pt-12 shadow-sm border border-gray-100 h-full">
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {testimonial.content}
                  </p>
                  
                  {/* Bottom quote icon */}
                  <div className="flex justify-end mb-4">
                    <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                      <QuoteIcon size="w-3 h-3" rotate={true} />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;