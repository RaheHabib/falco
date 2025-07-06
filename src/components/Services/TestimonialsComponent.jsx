import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Minimal Disruptions and Smooth Transitioning",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      author: "Kalvin Ayoga",
      position: "CEO of the LONDON STOCK EXCHANGE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      theme: "dark"
    },
    {
      id: 2,
      quote: "The standard Lorem Ipsum passage",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical.",
      author: "Kalvin Ayoga",
      position: "CEO of the LONDON STOCK EXCHANGE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      theme: "light"
    },
    {
      id: 3,
      quote: "Outstanding Results and Professional Service",
      content: "The team delivered exceptional results that exceeded our expectations. Their attention to detail and commitment to quality made all the difference in our project's success. We couldn't be happier with the outcome.",
      author: "Kalvin Ayoga",
      position: "CEO of the LONDON STOCK EXCHANGE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      theme: "dark"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
            Don't Take Our Word For It
          </h1>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-400 w-24"></div>
            <h2 className="text-lg sm:text-xl text-gray-600 mx-6">
              Here's What Our Clients Says
            </h2>
            <div className="h-px bg-gray-400 w-24"></div>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex justify-center">
                    <div className="max-w-2xl">
                      <div 
                        className={`
                            relative p-8 shadow-lg
                            rounded-tl-3xl
                            ${testimonial.theme === 'dark' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-400 text-white'
                            }
                        `}
  
                      >
                        {/* Large Quote Mark */}
                        <div className="absolute top-4 left-4 text-6xl font-serif opacity-20">
                          "
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl sm:text-2xl font-bold mb-6 mt-8">
                            "{testimonial.quote}"
                          </h3>
                          
                          <p className="text-sm sm:text-base leading-relaxed mb-8 opacity-90">
                            {testimonial.content}
                          </p>
                          
                          {/* Divider */}
                          <div className="h-px bg-gray-500 mb-6"></div>
                          
                          {/* Author Info */}
                          <div className="flex items-center">
                            <img 
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-lg">
                                {testimonial.author}
                              </h4>
                              <p className="text-sm opacity-80">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-colors duration-300
                ${index === currentSlide 
                  ? 'bg-gray-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;