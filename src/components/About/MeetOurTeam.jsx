import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Emily Roberts",
      role: "Web Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "David Thompson",
      role: "Front-End Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Back-End Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Rachel Davis",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Michael Wilson",
      role: "Content Writer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <div className="relative py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>

      {/* Decorative Curl Graphic */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 opacity-20">
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-black-400"
        >
          <path 
            d="M20 20C20 20 40 40 60 20C80 0 100 20 100 40C100 60 80 80 60 60C40 40 20 60 20 80C20 100 40 120 60 100" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M30 10C30 10 50 30 70 10C90 -10 110 10 110 30C110 50 90 70 70 50C50 30 30 50 30 70C30 90 50 110 70 90" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight max-w-4xl">
            Meet our team of Developers, designer and world-class problem solvers.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
            To be the company our customers want us to be, it takes an eclectic group of 
            passionate operators. Get to know the people leading the way at Falco Solutions. 
            We are redefining the way we approach web design and development and delivering 
            exceptional experiences to our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 md:mb-6 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center lg:text-left">
          <button className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-800 transition-colors duration-200">
            Get to Know Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;