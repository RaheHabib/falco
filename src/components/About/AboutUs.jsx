import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-[10rem] sm:h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] rounded-full bg-gradient-to-br from-orange-400/15 via-orange-500/20 to-yellow-600/10 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <p className="text-orange-500 text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            About <span className="bg-orange-300 px-3 py-1 rounded-2xl">us</span>
          </h2>
        </div>

        {/* Questions and Answers */}
        <div className="space-y-12 md:space-y-16">
          {/* Question 1: Who Are We? */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">
                Who Are We?
              </h3>
            </div>
            <div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We are a group of brilliant & helpful minds and exceptional talents who
                  promote the value of effective communication and process transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Question 2: What We Do? */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-400">
                What We Do?
              </h3>
            </div>
            <div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We start by listening to the ideas, issues, requirements, challenges and
                  objectives. The process continues with an effort to understand the business,
                  market sector and competitors to develop information which is combined with
                  our technical knowledge, expertise and research in order to provide the best
                  solution at the lowest cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;