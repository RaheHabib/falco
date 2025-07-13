export default function GlowingCTASection() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* Simple CTA Section with Subtle Glow */}
          <div className="relative">
            {/* Purple Glow Background - Multiple layers for better visibility */}
            <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-3xl opacity-20"></div>
            <div className="absolute inset-0 bg-purple-400 rounded-2xl blur-2xl opacity-15"></div>
            {/* <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-10"></div> */}
            
            {/* Main Content Container */}
            <div className="relative bg-black p-16 text-center">
              
              {/* Decorative Lines (matching your design) */}
              <div className="absolute top-8 left-8">
                <div className="w-12 h-0.5 bg-white mb-2"></div>
                <div className="w-8 h-0.5 bg-white"></div>
              </div>

              
              {/* Main Content */}
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-white">
                  Let's work together
                </h2>
                
                <p className="text-gray-300 text-lg">
                  Janessa64@Macejkovic LLC
                </p>
                
                {/* Simple CTA Button */}
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 font-medium text-lg transition-colors duration-300 flex items-center gap-3 mx-auto">
                  GET IN TOUCH
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }