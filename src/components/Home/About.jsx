import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for cards
  const topCardVariants = {
    hidden: { 
      x: 100, 
      opacity: 0.5 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bottomCardVariants = {
    hidden: { 
      x: 150, 
      opacity: 0.2 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Function to handle smooth scrolling to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-white z-10 overflow-hidden py-10 sm:py-8 md:py-12 lg:py-16">
      {/* Vertical "About us" text - hidden on mobile, responsive positioning */}
      <div className="absolute left-8 sm:left-16 lg:left-20 xl:left-24 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
        <div className="text-[#333] text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wider transform -rotate-90 origin-left whitespace-nowrap">
          About us
        </div>
      </div>

      {/* Mobile "About us" text - visible only on mobile */}
      <div className="block lg:hidden text-center mb-6 sm:mb-8">
        <h1 className="text-[#333] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider">
          About us
        </h1>
      </div>

      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 lg:ml-20 xl:ml-24">
        {/* Main content wrapper - Fixed spacing */}
        <div className="relative max-w-full lg:max-w-[90vh] xl:max-w-[100vh] mx-auto">
          {/* Image container with proper height */}
          <div className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            {/* Background image */}
          <img
              src="aboutbg.png"
              alt="Office building interior"
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[20px] sm:rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[60px] xl:rounded-tl-[90px] rounded-tr-[8px] sm:rounded-tr-[10px] rounded-bl-[8px] sm:rounded-bl-[10px] rounded-br-[8px] sm:rounded-br-[10px]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-tl-[20px] sm:rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[60px] xl:rounded-tl-[90px] rounded-tr-[8px] sm:rounded-tr-[10px] rounded-bl-[8px] sm:rounded-bl-[10px] rounded-br-[8px] sm:rounded-br-[10px]" />

            {/* "Get in touch" button - Fixed positioning */}
            <div className="absolute bottom-[-100px] sm:bottom-[-60px] md:bottom-[-70px] lg:bottom-[-80px] left-0 z-10">
              <button 
                onClick={scrollToContact}
                className="bg-black text-white px-3 py-4 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-medium hover:bg-opacity-90 transition-all shadow-lg"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Combined content card - Fixed positioning */}
            <motion.div 
              className="absolute bottom-[-60px] sm:bottom-[-80px] md:bottom-[-100px] lg:bottom-[-120px] xl:bottom-[-140px] right-0 w-full sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[60%] z-10 shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Top blur section */}
              <motion.div 
                className="p-3 sm:p-4 md:p-6 lg:p-8 backdrop-blur-md text-white rounded-tl-[20px] sm:rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[60px] xl:rounded-tl-[80px] bg-black bg-opacity-30"
                variants={topCardVariants}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  We're Falco Solutions
                </h2>
                <p className="text-xs sm:text-sm italic md:text-base leading-relaxed">
               " At Falco Solutions LTD, we help businesses transform ideas into impactful digital solutions. From market research to launch and growth, our team specializes in creating cutting-edge applications and websites enhanced with AI integration, blockchain development, and advanced data analytics.
                We don't just build — we innovate. Our solutions are designed to give you a competitive edge, whether through intelligent insights, seamless user experiences, or optimized SEO strategies that boost visibility and growth."
                </p>
              </motion.div>

              {/* Bottom solid section */}
              <motion.div 
                className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white text-black"
                variants={bottomCardVariants}
              >
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  With a future-driven approach, Falco Solutions is your partner in turning vision into reality — 
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;