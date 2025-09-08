// Terms.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../utils/Navigation';
import Footer from '../components/Home/Footer';

const Terms = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative ">
          {/* Header Section with Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" overflow-hidden mb-8 flex flex-col md:flex-row"
          >
            <div className="md:w-2/3 p-8">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
              >
                Terms of Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-500 italic mb-4"
              >
                Last Updated: {new Date().toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </motion.p>
              <p className="text-gray-700">
                Welcome to Falco Solutions. These Terms of Service govern your use of our website, applications, 
                and services. Please read them carefully before using our services.
              </p>
            </div>
            <div className="md:w-1/3 hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Professional business team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:bg-gradient-to-l"></div>
            </div>
          </motion.div>
          
          {/* Terms Content */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className=" overflow-hidden "
          >
            <Section title="1. Acceptance of Terms" variants={itemVariants} icon="📋">
              <p className="text-gray-700">
                By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </Section>

            <Section title="2. Services Provided" variants={itemVariants} icon="🚀">
              <p className="text-gray-700 mb-4">Falco Solutions provides the following services:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>SaaS solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>App and web development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Data science and machine learning services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Blockchain development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>SEO/ASO insights and analytics</span>
                </li>
              </ul>
              <p className="text-gray-700">
                All services are subject to these Terms and any additional agreements specific to each project.
              </p>
            </Section>

            <Section title="3. User Responsibilities" variants={itemVariants} icon="👤">
              <p className="text-gray-700 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide accurate information when registering or requesting services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintain the confidentiality of your account credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use our services in compliance with all applicable laws</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not engage in any activity that disrupts or interferes with our services</span>
                </li>
              </ul>
            </Section>

            <Section title="4. Intellectual Property" variants={itemVariants} icon="🔒">
              <p className="text-gray-700 mb-4">
                All intellectual property rights in our services, including software, designs, and content, 
                remain the property of Falco Solutions or our licensors. You may not copy, modify, or distribute 
                our content without explicit permission.
              </p>
              <p className="text-gray-700">
                For custom development projects, intellectual property arrangements will be specified in separate agreements.
              </p>
            </Section>

            <Section title="5. Payment Terms" variants={itemVariants} icon="💳">
              <p className="text-gray-700 mb-4">
                For paid services, payment terms will be outlined in individual service agreements. 
                Generally, we require:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>An initial deposit for project-based work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regular invoicing according to project milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Payment within 30 days of invoice date unless otherwise specified</span>
                </li>
              </ul>
            </Section>

            <Section title="6. Limitation of Liability" variants={itemVariants} icon="⚠️">
              <p className="text-gray-700">
                Falco Solutions shall not be liable for any indirect, incidental, special, or consequential damages 
                resulting from the use or inability to use our services. Our total liability for any claim shall not 
                exceed the amount paid by you for the services in question.
              </p>
            </Section>

            <Section title="7. Termination" variants={itemVariants} icon="🔚">
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your access to our services at our discretion, 
                without notice, for conduct that we believe violates these Terms or is harmful to other users, 
                us, or third parties, or for any other reason.
              </p>
            </Section>

            <Section title="8. Changes to Terms" variants={itemVariants} icon="🔄">
              <p className="text-gray-700">
                We may modify these Terms of Service at any time. We will provide notice of significant changes 
                by posting the new Terms on our website and updating the "Last Updated" date. Your continued use 
                of our services after changes constitutes acceptance of the new Terms.
              </p>
            </Section>

            <Section title="9. Governing Law" variants={itemVariants} icon="⚖️">
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </Section>

            <Section title="10. Contact Information" variants={itemVariants} icon="📞">
              <p className="text-gray-700 mb-4">For questions about these Terms of Service, please contact us at:</p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Falco Solutions</p>
                    <p className="text-gray-600">Birmingham, United Kingdom</p>
                    <p className="text-blue-600">Email: admin@falcosolutions.co.uk</p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Office location" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </Section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Section = ({ title, children, variants, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ x: 5 }}
      className="mb-8 p-6 rounded-lg Privacy transition-colors duration-200 border-b border-gray-100 last:border-b-0"
    >
      <div className="flex items-start mb-3">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default Terms;