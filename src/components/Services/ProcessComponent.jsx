import React from 'react';
import { Settings, Package } from 'lucide-react';

const ProcessComponent = () => {
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Right margin glow */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>
      <div className="absolute left-0 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-70 pointer-events-none z-0"
      style={{ top: "90rem" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            We Believe Progress depends on Process
          </h1>
        </div>

        {/* Main Process Section */}
        <div className="relative px-4 sm:px-10 lg:px-24">
          {/* Right side content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              {/* Process cards will be positioned here */}
            </div>
            
            <div className="lg:w-1/2 lg:pl-16">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mr-4">
                  Experience the Power of Process.
                </h2>
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Step 1 - Discover */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <div className="lg:w-1/3 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-40">
                    <img src="/flow.png" alt="Discovery Flow" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pl-16 mb-8 lg:mb-0">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md">
                    Every project starts with understanding the challenge and the landscape...
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
              <div className="lg:w-1/3 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-40 rounded-2xl overflow-hidden">
                    <img src="/design.png" alt="Design Process" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pr-16 mb-8 lg:mb-0">
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md ml-auto">
                    ...allowing us to design a solution that meets your needs...
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Develop */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <div className="lg:w-1/3 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <div className="text-blue-400 mb-2">declare Object {'{'}</div>
                    <div className="text-green-400 pl-4 mb-1">provider = "mutable"</div>
                    <div className="text-yellow-400 pl-4 mb-1">url = "postgresql://DATABASE_URL"</div>
                    <div className="text-blue-400 mb-2">{'}'}</div>
                    <div className="text-blue-400 mb-2">generator Client {'{'}</div>
                    <div className="text-green-400 pl-4 mb-1">provider = "prisma-client-js"</div>
                    <div className="text-blue-400">{'}'}</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pl-16 mb-8 lg:mb-0">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Develop</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md">
                    ...keeping development quality high and costs low...
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 - Deliver */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
              <div className="lg:w-1/3">
                <div className="bg-gray-800 rounded-2xl p-4 shadow-lg w-64 mx-auto relative">
                  {/* Step number (4) badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center h-40">
                    <Package className="w-40 h-40 text-gray-400 stroke-1" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 lg:pr-16 mb-8 lg:mb-0">
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliver</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md ml-auto">
                    ...resulting in a tailored solution that provides you value.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessComponent;