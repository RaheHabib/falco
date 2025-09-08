// Privacy.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../utils/Navigation';
import Footer from '../components/Home/Footer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Privacy = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Navigation />
      <div className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="  overflow-hidden p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
             
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-gray-500 italic"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Last Updated: {currentDate}
            </motion.p>
          </div>
          
          <motion.div 
            className="prose prose-lg max-w-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="text-gray-700 mb-6 leading-relaxed" variants={itemVariants}>
              At Falco Solutions ("we", "our", "us"), we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our services, websites, or applications.
            </motion.p>
            
            <motion.div 
              className="text-gray-700 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 flex items-start"
              variants={itemVariants}
            >
              <div className="pt-1">
                We are registered in the United Kingdom, based in Birmingham, and comply with the UK General Data Protection Regulation (UK GDPR), 
                the Data Protection Act 2018, and (where applicable) the EU GDPR.
              </div>
            </motion.div>

            <Section title="1. Information We Collect" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We may collect the following types of data:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li><span className="font-medium text-blue-600">Personal Information:</span> Name, email address, phone number, company details.</li>
                <li><span className="font-medium text-blue-600">Technical Data:</span> IP address, browser type, operating system, device information.</li>
                <li><span className="font-medium text-blue-600">Usage Data:</span> How you interact with our website, apps, or services (analytics, cookies).</li>
                <li><span className="font-medium text-blue-600">Project/Client Data:</span> Information you provide for app development, data science, ML, or blockchain projects.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Data" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We process your data for the following purposes:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>To deliver and maintain our services (SaaS, app/web development, data science, ML, blockchain).</li>
                <li>To communicate with you about projects, updates, or support.</li>
                <li>To improve our website, applications, and services.</li>
                <li>To provide SEO/ASO insights and analytics.</li>
                <li>For marketing purposes (only with your consent).</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </Section>

            <Section title="3. Legal Basis for Processing" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We rely on the following lawful bases under UK GDPR:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li><span className="font-medium text-blue-600">Consent</span> – when you opt-in to cookies, newsletters, or marketing.</li>
                <li><span className="font-medium text-blue-600">Contract</span> – to provide services you request.</li>
                <li><span className="font-medium text-blue-600">Legitimate Interests</span> – to improve our services, prevent fraud, and ensure security.</li>
                <li><span className="font-medium text-blue-600">Legal Obligation</span> – where required by law.</li>
              </ul>
            </Section>

            <Section title="4. Cookies & Tracking" variants={itemVariants}>
              <p className="text-gray-700 mb-4">Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Analyse site traffic and improve user experience.</li>
                <li>Support SEO/ASO insights and analytics.</li>
              </ul>
              <p className="text-gray-700">
                You can manage your cookie preferences via your browser settings. 
                For more details, please see our Cookie Policy.
              </p>
            </Section>

            <Section title="5. Sharing Your Data" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We do not sell your personal data. We may share information with:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Service providers (e.g., hosting, analytics, cloud services).</li>
                <li>Project partners where necessary to deliver services.</li>
                <li>Regulators or legal authorities, if required by law.</li>
              </ul>
              <p className="text-gray-700">
                If we transfer data outside the UK/EU, we ensure safeguards (such as Standard Contractual Clauses) are in place.
              </p>
            </Section>

            <Section title="6. Data Retention" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We only keep your data as long as necessary for:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Active projects and service delivery.</li>
                <li>Legal and accounting obligations.</li>
                <li>Marketing (until you unsubscribe).</li>
              </ul>
              <p className="text-gray-700">After this, data is securely deleted or anonymised.</p>
            </Section>

            <Section title="7. Your Rights (UK & EU GDPR)" variants={itemVariants}>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Request access to your data.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data ("right to be forgotten").</li>
                <li>Restrict or object to processing.</li>
                <li>Request a copy of your data (data portability).</li>
                <li>Withdraw consent at any time (for marketing/cookies).</li>
              </ul>
              <p className="text-gray-700">To exercise your rights, contact us at admin@falcosolutions.co.uk.</p>
            </Section>

            <Section title="8. Data Security" variants={itemVariants}>
              <p className="text-gray-700 mb-4">We use appropriate technical and organisational measures to protect your data, including:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Encryption of sensitive information.</li>
                <li>Secure servers and access controls.</li>
                <li>Regular monitoring and audits.</li>
              </ul>
            </Section>

            <Section title="9. Children's Privacy" variants={itemVariants}>
              <p className="text-gray-700">Our services are not directed at children under 16. We do not knowingly collect data from children.</p>
            </Section>

            <Section title="10. Contact Us" variants={itemVariants}>
              <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-gray-700 font-medium text-lg">Falco Solutions</p>
                <p className="text-gray-700">Birmingham, United Kingdom</p>
                <p className="text-blue-600 font-medium">Email: admin@falcosolutions.co.uk</p>
              </motion.div>
            </Section>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

const Section = ({ title, children, variants }) => {
  return (
    <motion.div className="mb-10 pb-6 border-b border-gray-100 last:border-b-0" variants={variants}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        {title}
      </h2>
      {children}
    </motion.div>
  );
};

export default Privacy;