import React from 'react';
const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Gift",
      subtitle: "Mobile App",
      type: "mobile",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "AMZ",
      subtitle: "Web Application",
      type: "web",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "AMZ Web",
      subtitle: "Application",
      type: "web",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Gift",
      subtitle: "Mobile App",
      type: "mobile",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="relative px-6 sm:px-12 lg:px-32 xl:px-48">
      {/* Bottom right random glow (darker) */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30  rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/30 via-orange-500/20 to-yellow-400/30  rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
          <div className="lg:max-w-md">
            <p className="text-sm font-medium text-orange-600 uppercase tracking-wider mb-2">
              OUR WORK
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Portfo
              <span className="inline-block bg-orange-700 text-white px-2 py-1 rounded-md transform -rotate-2">
                lio
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl mollis arcu nisl. Ipsum nunc qenean eleifend sed et neque vivamus.
            </p>
          </div>
          

        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group cursor-pointer ${
                index === 0 || index === 3 ? 'md:mt-0' : 'md:mt-16'
              }`}
            >
              {/* Decorative Wave Icon */}
              <div className="mb-4">
                <img src="/orange_curl.svg" alt="Curl Icon" className="w-8 h-8 text-gray-400" />
              </div>

              {/* Project Title */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xl text-gray-600">
                  {item.subtitle}
                </p>
              </div>

              {/* Project Image/Card */}
              <div className={`
                relative aspect-[4/3] rounded-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2
                ${item.type === 'mobile' ? 'bg-black' : 'bg-gray-100'}
              `}>
                {item.type === 'mobile' ? (
                  // Mobile App Card (Dark)
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-lg">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Web Application Card (Light)
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <h4 className="text-gray-900 text-2xl md:text-3xl font-bold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;