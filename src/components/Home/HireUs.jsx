import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HireUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    projectType: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("M_CTarJqjrkNvsez5"); // Replace with your EmailJS public key

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.subject || !formData.description) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: formData.subject,
      project_type: formData.projectType,
      message: formData.description,
      to_email: 'talhaazfar4722@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send(
      'service_4swfz4p', // Replace with your EmailJS service ID
      'template_r8o2osn', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        projectType: '',
        description: ''
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      toast.error('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce',
    'Digital Marketing',
    'Consulting',
    'Other'
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <section id='contact' ref={sectionRef} className="relative ...">
        {/* Glow OUTSIDE the content container */}
        <div className="absolute bottom-0 right-0 w-60 h-60 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-blue-400/30 via-indigo-400/30 to-purple-500/30 blur-3xl pointer-events-none z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="top-20 relative py-16 px-4 overflow-hidden mx-auto max-w-5xl md:px-8 lg:px-16">
            {/* Background decorative elements */}

            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* Left Section - Contact Form */}
                <div
                  className={`relative transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform -translate-x-12'
                    }`}
                >
                  {/* Hire us title */}
                  <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Hire{' '}
                      <span className="bg-gray-700 text-white px-3 py-1 rounded">
                        us
                      </span>
                    </h2>
                  </div>

                  {/* Form Container with border */}
                  <div className="relative">
                    {/* Blue border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transform rotate-1"></div>

                    {/* Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="relative bg-black rounded-lg p-8 text-white">
                      {/* Decorative lines in top right */}
                      <div className="absolute top-4 right-4">
                        <div className="flex flex-col space-y-1">
                          <div className="w-8 h-0.5 bg-white transform rotate-45"></div>
                          <div className="w-6 h-0.5 bg-white transform rotate-45"></div>
                          <div className="w-4 h-0.5 bg-white transform rotate-45"></div>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium mb-8">Let's discuss your project</h3>

                      <div className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                              placeholder=""
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">E-Mail *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>

                        {/* Subject and Project Type Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Subject *</label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                              placeholder=""
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Type of the Project</label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors appearance-none cursor-pointer"
                            >
                              <option value="" className="bg-black">Select from the list...</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type} className="bg-black">
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-sm font-medium mb-2">Describe your Project *</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={5}
                            className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                            placeholder=""
                            required
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span>{isSubmitting ? 'Sending...' : 'Contact us'}</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Section - Contact Information */}
                <div
                  className={`space-y-12 transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-12'
                    }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  {/* Contact us title */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                      Contact{' '}
                      <span className="bg-gray-700 text-white px-3 py-1 rounded">
                        us
                      </span>
                    </h2>

                    {/* Contact Details */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <a
                          href="mailto:admin@falcosolutionsltd.co.uk"
                          className="text-blue-500 underline  text-base sm:text-lg hover:text-blue-600"
                        >
                          admin@falcosolutionsltd.co.uk
                        </a>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <a
                          href="tel:+447300846252"
                          className="text-blue-500 underline text-base sm:text-lg hover:text-blue-600"
                        >
                          +44 7300 846252
                        </a>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                        <div className="text-gray-700">
                          <div>66630, Wood Street,</div>
                          <div>Largo-88796, Turkey</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-800"></div>

                  {/* Social Media Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">To connect with us</h3>
                    <p className="text-gray-600 mb-6">Don't forgot to follow us on</p>

                    {/* Curved arrow decoration */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <svg className="w-16 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 64 48">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 24c8-8 16-8 24 0s16 8 24 0" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M48 16l8 8-8 8" />
                        </svg>
                      </div>

                      {/* Social Icons */}
                      <div className="flex space-x-4">
                        <a href="https://linkedin.com/company/falcosolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://youtube.com/@falcosolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                          <BsYoutube className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://instagram.com/falcosolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireUs;