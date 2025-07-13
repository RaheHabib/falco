import React, { useState, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

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
    <motion.div 
      ref={sectionRef}
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background decorative elements - optimized with transform3d */}
      <div 
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 left-4 sm:left-8 md:left-20 top-20 sm:top-30 md:top-60 z-0 pointer-events-none"
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
        className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 bg-gradient-to-tr from-blue-500/50 via-indigo-600/50 to-purple-700/50 rounded-full blur-3xl opacity-60 pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Animate on scroll */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wider uppercase mb-2">
            OUR COMMUNITY
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Community love{' '}
            <span className="bg-gray-700 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-sm sm:text-base">
              us
            </span>
          </h2>
        </motion.div>

        {/* Navigation arrows - Animate on scroll */}
        <motion.div 
          className="absolute right-0 top-12 sm:top-16 flex space-x-2 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>

        {/* Testimonials grid - Optimized with memoized states */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {testimonialStates.map(({ isActive, isPrev, isNext, index }) => {
            const testimonial = testimonials[index];
            
            return (
              <motion.div
                key={testimonial.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { 
                  opacity: isActive ? 1 : (isPrev || isNext ? 0.8 : 0.5),
                  y: 0,
                  scale: isActive ? 1.05 : (isPrev || isNext ? 1 : 0.95)
                } : { opacity: 0, y: 20, scale: 0.95 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut"
                }}
                style={{ 
                  willChange: isAnimating ? 'transform' : 'auto'
                }}
              >
                {/* Quote icon - Top */}
                <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 z-10">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded flex items-center justify-center">
                    <QuoteIcon size="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Testimonial card */}
                <div className="bg-white rounded-lg p-6 sm:p-8 pt-10 sm:pt-12 shadow-sm border border-gray-100 h-full">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {testimonial.content}
                  </p>
                  
                  {/* Bottom quote icon */}
                  <div className="flex justify-end mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded flex items-center justify-center">
                      <QuoteIcon size="w-2.5 h-2.5 sm:w-3 sm:h-3" rotate={true} />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                    {testimonial.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;