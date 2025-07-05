import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 sm:h-20 md:justify-between">
        {/* Mobile Layout - Logo centered */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Mobile Hamburger - Left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="/logo.png"
              alt="Falco Logo"
              className="h-full w-full mt-72 sm:h-12 sm:w-12"
            />
          </div>

          {/* Mobile CTA Button - Right */}
          <div className="sm:hidden">
            <button className="bg-black text-white px-3 py-1.5 hover:bg-gray-800 transition-colors font-medium text-xs">
              <span className="inline-block w-1.5 h-1.5 bg-red-500 mr-1.5"></span>
              Hire Us
            </button>
          </div>
          
          {/* Tablet CTA Button - Right */}
          <div className="hidden sm:flex md:hidden">
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors font-medium text-sm">
              <span className="inline-block w-2 h-2 bg-red-500 mr-2"></span>
              Hire Us, Now
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Desktop Logo - Left */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Falco Logo"
              className="h-20 w-20 lg:h-32 lg:w-32 xl:h-40 xl:w-40 mt-4"
            />
          </div>

          {/* Desktop Nav - Center */}
          <div className="flex space-x-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button - Right */}
          <div className="flex">
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors font-medium text-base">
              <span className="inline-block w-2 h-2 bg-red-500 mr-2"></span>
              Hire Us, Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-4 bg-white rounded-lg shadow-md z-50 relative">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors font-medium text-sm">
            <span className="inline-block w-2 h-2 bg-red-500 mr-2"></span>
            Hire Us, Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;