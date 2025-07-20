import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Community = () => {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default
  const [questionForm, setQuestionForm] = useState({
    subject: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Refs for elements to animate
  const headerRef = React.useRef(null);
  const leftSectionRef = React.useRef(null);
  const rightSectionRef = React.useRef(null);
  const faqRefs = React.useRef([]);

  // Use Framer Motion's useInView hook
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const leftSectionInView = useInView(leftSectionRef, { once: true, margin: "-50px" });
  const rightSectionInView = useInView(rightSectionRef, { once: true, margin: "-50px" });

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet consectetur. Aliquet sed bibendum neque arcu libero phasellus quis tincidunt ac. Sit nulla suspendisse ullamcorper hendrerit ut sit morbi. Nunc urna pellentesque phasellus euismod integer. "
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Facilisi",
      answer: "Lorem ipsum dolor sit amet consectetur. Facilisi mauris tempor nunc at dignissim. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Morbi ut malesuada massa nullam scelerisque porttitor ante lacus.",
      answer: "Lorem ipsum dolor sit amet consectetur. Morbi ut malesuada massa nullam scelerisque porttitor ante lacus. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Consequat faucibus mollis lorem nam. Malesuada tincidunt nulla est id.",
      answer: "Consequat faucibus mollis lorem nam. Malesuada tincidunt nulla est id. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Nunc nec scelerisque dictumst vivamus euismod scelerisque mi pellentesque. Consequat pulvinar mi pellentesque scelerisque praesent massa leo bibendum.",
      answer: "Nunc nec scelerisque dictumst vivamus euismod scelerisque mi pellentesque. Consequat pulvinar mi pellentesque scelerisque praesent massa leo bibendum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "Orci neque sed morbi id ut nulla velit quis mi. Neque tortor augue vitae arcu bibendum ut fringilla ac. Arcu pellentesque tortor aliquam nunc.",
      answer: "Orci neque sed morbi id ut nulla velit quis mi. Neque tortor augue vitae arcu bibendum ut fringilla ac. Arcu pellentesque tortor aliquam nunc. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitQuestion = async () => {
    if (!questionForm.subject.trim() || !questionForm.description.trim()) {
      setSubmitMessage('Please fill in both fields');
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Create form data for Google Forms
      const formData = new FormData();
      formData.append('entry.1856644384', questionForm.subject);
      formData.append('entry.1014581932', questionForm.description);

      // Submit to Google Forms
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfQDF6gUipO37rqnRF-dqrbgiViNyZtzVUpyYXGrRox7gNzbg/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formData
      });

      // Since we use no-cors mode, we can't read the response
      // But if we reach this point, the request was sent
      setSubmitMessage('Question submitted successfully!');
      setQuestionForm({ subject: '', description: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error submitting question. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Glow OUTSIDE the content container */}
      <div className="absolute top-14 left-0 w-64 h-64 sm:w-70 sm:h-70 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>
      {/* <div className="absolute top-8 left-8 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] bg-purple-400 rounded-full blur-2xl opacity-15 pointer-events-none z-0"></div> */}
      {/* <div className="absolute top-22 left-16 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[16rem] lg:h-[16rem] bg-purple-600 rounded-full blur-xl opacity-10 pointer-events-none z-0"></div> */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="top-20 relative sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden mx-auto max-w-5xl">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-wider uppercase mb-2 sm:mb-4">
              OUR COMMUNITY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Community's{' '}
              <span className="bg-gray-700 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-sm sm:text-base">
                questions
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            
            {/* Left Section - Illustration and Question Form */}
            <motion.div 
              ref={leftSectionRef}
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={leftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {/* Question Illustration */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img 
                    src="question.png" 
                    alt="Person with questions" 
                    className="w-80 h-80 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] object-contain" 
                  />
                </div>
              </div>

              {/* Question Submission Form */}
              <div className="bg-black rounded-lg p-4 sm:p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Don't find your answer!</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
                  Don't worry, write your question here and our support team will help you.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={questionForm.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Describe your Project</label>
                    <textarea
                      name="description"
                      value={questionForm.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm sm:text-base"
                      placeholder=""
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmitQuestion}
                    disabled={isSubmitting}
                    className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors transform hover:scale-105 text-sm sm:text-base ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT QUESTION'}
                  </button>

                  {/* Submit Message */}
                  {submitMessage && (
                    <div className={`text-xs sm:text-sm mt-2 ${
                      submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Section - FAQ List */}
            <motion.div 
              ref={rightSectionRef}
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={rightSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  ref={el => faqRefs.current[index] = el}
                  className="bg-black rounded-lg overflow-hidden transform transition-all duration-700 ease-out hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={rightSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                  >
                    <span className="text-white font-medium pr-2 sm:pr-4 text-xs sm:text-sm md:text-base">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white transform transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white transform transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="border-t border-gray-700 pt-3 sm:pt-4">
                        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;