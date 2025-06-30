import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen py-8 lg:py-16 bg-white z-10">
      {/* Vertical "About us" text - hidden on mobile, responsive positioning */}
      <div className="absolute left-56 sm:left-64 lg:left-78 xl:left-[20rem] top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
       <div className="text-[#333] text-lg xl:text-xl font-bold uppercase tracking-wider transform -rotate-90 origin-left whitespace-nowrap">
          About us
        </div>
      </div>

      {/* Mobile "About us" text - visible only on mobile */}
      <div className="block lg:hidden text-center mb-8">
        <h1 className="text-[#333] text-2xl sm:text-3xl font-bold uppercase tracking-wider">
          About us
        </h1>
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-24 lg:ml-32 xl:ml-40">
        {/* Image box */}
        <div className="relative max-w-full lg:max-w-[90vh] xl:max-w-[100vh] mx-auto min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] overflow-visible pb-20 sm:pb-32 lg:pb-40">
          {/* Background image */}
          <img
            src="/aboutbg.png"
            alt="Office building interior"
            className="absolute inset-0 w-full h-full object-cover rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[90px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[90px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]" />
          
          {/* "Get in touch" button - responsive positioning */}
          <div className="absolute bottom-[-135px] left-0 sm:left-0 z-10">
            <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-opacity-90 transition-all shadow-lg">
              GET IN TOUCH
            </button>
          </div>
          
          {/* Combined content card - responsive positioning and sizing */}
          <div className="absolute -bottom-16 sm:-bottom-24 lg:-bottom-32 xl:-bottom-[136px] right-0 w-full sm:w-[85%] lg:w-[75%] xl:w-[60%] z-10 shadow-2xl overflow-visible">
            {/* Top blur section */}
            <div className="p-4 sm:p-6 lg:p-8 backdrop-blur-md text-white rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[80px]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                We're Falco Solutions
              </h2>
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi.
                Diam nisl non in et mattis. Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras diam tellus convallis.
              </p>
            </div>
            
            {/* Bottom solid section */}
            <div className="p-4 sm:p-6 lg:p-8 bg-white text-black">
              <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                Condimentum aliquam arcu arcu massa purus egestas ante vulputate nisl. Nisl tellus non, eu velit mauris, lectus vel, ornare.
                Pellentesque in at ac tortor ipsum commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;