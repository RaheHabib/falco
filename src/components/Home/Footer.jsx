import { Linkedin, Youtube, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 mb-4 md:mb-6">

          {/* Company Info */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Falco logo" className="w-20 bg-white rounded-full h-20 flex-shrink-0" />
              <div className="leading-tight">
                <div className="font-bold text-black text-lg">Falco</div>
                <div className="font-bold text-black text-lg">Solutions</div>
              </div>
            </div>


            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Unleash Your True Potential with Falco Solutions
            </p>

            {/* Social Media */}
            <div className="w-full">
              <h4 className="font-semibold text-black mb-2">Follow Us</h4>
              <div className="flex justify-center sm:justify-start space-x-3">
                <a
                  href="https://linkedin.com/company/falcosolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@falcosolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/falcosolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-semibold text-black">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">About us</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Services</a></li>
              {/* <li><a href="/privacy" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Privacy & Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Terms of Service</a></li> */}
              <li><a href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          {/* <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-semibold text-black">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/custom-website-design" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Custom Website Design</a></li>
              <li><a href="/services/responsive-web-development" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Responsive Web Development</a></li>
              <li><a href="/services/true-solutions" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">True Solutions</a></li>
              <li><a href="/services/landing-page-optimization" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Landing Page Optimization</a></li>
              <li><a href="/services/maintenance-support" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">Website Maintenance and Support</a></li>
            </ul>
          </div> */}

          {/* Contact Information */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-semibold text-black">Contact Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+44 7300 846252" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block">
                  +44 7300 846252
                </a>
              </li>
              <li>
                <a href="mailto:admin@falcosolutionsltd.co.uk" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm block break-all">
                  admin@falcosolutionsltd.co.uk
                </a>
              </li>
              <li>
                <div className="text-gray-600 text-sm leading-relaxed">
                  Address Line 1, Address Line 2,<br />
                  Address Line 3, Address Line 4.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center">
            <div className="text-gray-600 text-sm order-2 sm:order-1">
              © Copyrights 2025. All rights reserved.
            </div>
            <div className="text-gray-600 text-sm order-1 sm:order-2">
              Managed by{' '}
              <a
                href="https://falcosolutions.com"
                className="text-black hover:text-gray-800 hover:underline font-medium transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falco Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;