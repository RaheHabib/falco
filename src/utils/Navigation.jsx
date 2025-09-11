import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase"; // make sure firebase is initialized

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const db = getFirestore(app);

  // Fetch services from Firebase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesList);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };
    fetchServices();
  }, [db]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" }, // main services link
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 sm:h-20 md:justify-between">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Hamburger */}
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

          {/* Mobile Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link to="/">
              <img
                src="logo.png"
                alt="Falco Logo"
                className="h-12 w-12 sm:h-12 sm:w-12"
              />
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden">
            <Link
              to="/contact"
              className="bg-black text-white px-3 py-1.5 hover:bg-gray-800 transition-colors font-medium text-xs"
            >
              <span className="inline-block w-1.5 h-1.5 bg-red-500 mr-1.5"></span>
              Start a Project
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full h-full">
          {/* Logo */}
          <div className="flex-shrink-0 mr-6">
            <Link to="/">
              <img
                src="logo.png"
                alt="Falco Logo"
                className="h-16 w-16 lg:h-24 lg:w-24 mt-2"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, i) =>
              link.label === "Services" ? (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* Services main link */}
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center"
                  >
                    {link.label}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute bg-white shadow-lg rounded-md py-2 w-56 z-50">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to="/contact"
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="flex ml-6">
            <Link
              to="/contact"
              className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              <span className="inline-block w-2 h-2 bg-red-500 mr-2"></span>
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-4 bg-white rounded-lg shadow-md z-50 relative">
          {navLinks.map((link, i) =>
            link.label === "Services" ? (
              <div key={i} className="space-y-1">
                <p className="font-medium text-gray-700">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to="/contact"
                    className="block w-full text-left text-gray-600 hover:text-gray-900 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={i}
                to={link.href}
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="w-full block text-center bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors font-medium text-sm"
            onClick={() => setIsOpen(false)}
          >
            <span className="inline-block w-2 h-2 bg-red-500 mr-2"></span>
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
