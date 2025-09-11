import React from 'react';

const WorkWithUs = () => {
  const clientTypes = [
    {
      id: 1,
      title: "Enterprises",
      description: "We support enterprises in building smarter, more connected systems. From custom web and mobile applications to data-driven AI solutions and secure blockchain integrations, our team helps large organizations streamline operations and adapt to the digital age. With thoughtful UI/UX design and scalable architectures, we deliver solutions that grow with your business.",
      services: ["Branding", "Web & Mobile Apps", "Blockchain", "UI/UX", "AI/ML"],
      graphic: "sme-graphic.png", // Your SME colorful graphic
      bgColor: "bg-gray-900"
    },
    {
      id: 2,
      title: "Startups",
      description: "For startups, speed and flexibility are everything. We help early-stage teams bring ideas to market with MVPs, SaaS platforms, and mobile apps designed to scale. Whether it’s adding AI for smarter insights or using blockchain for trust and transparency, we provide the right mix of technology and design to turn vision into product.",
      services: ["Branding", "Web & Mobile Apps", "Blockchain", "UI/UX", "AI/ML"],
      graphic: "startup-graphic.png", // Your startup colorful graphic
      bgColor: "bg-gray-900"
    },
    {
      id: 3,
      title: "Agencies",
      description: "We collaborate with agencies and software vendors as a trusted development partner. Our team builds white-label apps, blockchain solutions, and automation tools that extend your in-house capabilities. With reliable delivery and a focus on quality design and user experience, we help agencies deliver more value to their clients while saving time and resources.",
      services: ["Branding", "Web & Mobile Apps", "Blockchain", "UI/UX", "AI/ML"],
      graphic: "agencies-graphic.png", // Your agencies colorful graphic
      bgColor: "bg-gray-900"
    }
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-30 xl:px-30">

      <div className="absolute -top-10 -left-30 z-0 pointer-events-none">
        <div className="w-40 h-40 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-purple-400/30 via-indigo-400/30 to-blue-500/30 blur-3xl"></div>
      </div>

      {/* Outer Glow: Bottom Right */}
      <div className="absolute -bottom-10 -right-10 z-0 pointer-events-none">
        <div className="w-40 h-40 lg:w-60 lg:h-60 rounded-full bg-gradient-to-tr from-blue-400/30 via-indigo-400/30 to-purple-500/30 blur-3xl"></div>
      </div>


      <div className="max-w-7xl mx-auto relative">
        {/* Top right glow */}
        <div className="absolute top-0 right-0 z-0">
          <div className="w-16 h-16 sm:w-[10rem] sm:h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full bg-gradient-to-br from-purple-400/40 via-indigo-500/40 to-blue-600/20 blur-3xl"></div>
        </div>
        {/* Bottom left glow */}
        <div className="absolute bottom-0 left-0 z-0">
          <div className="w-16 h-16 sm:w-[10rem] sm:h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-500/40 to-purple-400/40 blur-3xl"></div>
        </div>
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
            OUR CLIENTS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            We Work With
          </h2>
        </div>

        {/* Client Cards */}
        <div className="space-y-8">
          {clientTypes.map((client, index) => (
            <div
              key={client.id}
              className={`${client.bgColor} p-8 lg:p-12 overflow-hidden relative group hover:shadow-2xl transition-all duration-300
                  ${index === 0 ? 'rounded-tl-[80px]' : ''} 
                ${index === 2 ? 'rounded-br-[80px]' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Side */}
                <div className="text-white space-y-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {client.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {client.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-3">
                    {client.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-white uppercase bg-opacity-10 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm hover:bg-opacity-20 transition-all duration-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Graphic Side */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <img
                      src={client.graphic}
                      alt={`${client.title} illustration`}
                      className="w-full max-w-md h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Decorative elements for visual enhancement */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 bg-opacity-20 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white from-opacity-5 to-transparent rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500 from-opacity-10 to-transparent rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkWithUs;