import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Package } from 'lucide-react';

const ProcessComponent = () => {
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Right margin glow */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>
      <div className="absolute left-0 transform -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-70 pointer-events-none z-0"
      style={{ top: "90rem" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            We Believe Progress depends on Process
          </h1>
        </motion.div>

        {/* Main Process Section */}
        <div className="relative px-2 sm:px-6 lg:px-16 xl:px-24">
          {/* Right side content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              {/* Process cards will be positioned here */}
            </div>
            
            <motion.div 
              className="lg:w-1/2 lg:pl-8 xl:pl-16"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Experience the Power of Process.
                </h2>
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end.
              </p>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Step 1 - Discover */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <motion.div 
                className="lg:w-1/3 relative"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-40">
                    <img src="/flow.png" alt="Discovery Flow" className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-2/3 lg:pl-8 xl:pl-16 mb-8 lg:mb-0"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Discover</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                    Every project starts with understanding the challenge and the landscape...
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 2 - Design */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
              <motion.div 
                className="lg:w-1/3 relative"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-40 rounded-2xl overflow-hidden">
                    <img src="/design.png" alt="Design Process" className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-2/3 lg:pr-8 xl:pr-16 mb-8 lg:mb-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-left lg:text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Design</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md lg:ml-auto">
                    ...allowing us to design a solution that meets your needs...
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 3 - Develop */}
            <div className="flex flex-col lg:flex-row items-center mb-16">
              <motion.div 
                className="lg:w-1/3 relative"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
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
              </motion.div>
              <motion.div 
                className="lg:w-2/3 lg:pl-8 xl:pl-16 mb-8 lg:mb-0"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Develop</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                    ...keeping development quality high and costs low...
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Step 4 - Deliver */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-16">
              <motion.div 
                className="lg:w-1/3"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-gray-800 rounded-2xl p-4 shadow-lg w-48 sm:w-56 md:w-64 mx-auto relative">
                  {/* Step number (4) badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center h-32 sm:h-40">
                    <Package className="w-32 h-32 sm:w-40 sm:h-40 text-gray-400 stroke-1" />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="lg:w-2/3 lg:pr-8 xl:pr-16 mb-8 lg:mb-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-left lg:text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Deliver</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md lg:ml-auto">
                    ...resulting in a tailored solution that provides you value.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessComponent;