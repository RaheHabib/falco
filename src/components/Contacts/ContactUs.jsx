import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields (Name, Email, and Message)');
      setIsSubmitting(false);
      return;
    }

    emailjs.send(
      'service_60aypz2',
      'template_4uv9ykv',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'admin@falcosolutions.co.uk'
      },
      'c1AuQSNO4h6HbHjrT'
    )
      .then((response) => {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => setIsSubmitting(false));
  };

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

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute left-0 top-20 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
        <div className="absolute right-0 top-40 w-80 h-80 bg-gradient-to-tr from-violet-400/30 via-purple-500/20 to-purple-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-orange-400/30 via-yellow-300/20 to-yellow-400/30 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-left mt-12 mb-16">
            <h1 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2 animate-fade-in">
              Contact Us
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 animate-fade-in-delay">
              Get in Touch with Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Contact Falco Solutions today and let's start creating your digital success story...
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <a href="tel:+447300846252" className="text-blue-500 underline text-base sm:text-lg">
                      +44 7300 846252
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">Email Address</h3>
                    <a href="mailto:admin@falcosolutionsltd.co.uk" className="text-blue-500 underline text-base sm:text-lg">
                      admin@falcosolutions.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-slide-up-delay">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
