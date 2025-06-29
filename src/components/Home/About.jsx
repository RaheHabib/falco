import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 py-8 lg:py-16">
      {/* Container with left and right margins */}
      <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-24">
        {/* Box with background image and custom radius */}
        <div className="relative max-w-[100vh] mx-auto min-h-[70vh] lg:min-h-[70vh] overflow-hidden"             style={{ 
               borderTopLeftRadius: '90px',
               borderTopRightRadius: '10px', 
               borderBottomLeftRadius: '10px', 
               borderBottomRightRadius: '10px' 
             }}>
          {/* Background Image */}
          <img
            src="/aboutbg.png" // Replace with your background image path
            alt="Office building interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        </div>
      </div>
    </section>
  );
};

export default About;