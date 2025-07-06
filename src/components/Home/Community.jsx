import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Community = () => {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default
  const [questionForm, setQuestionForm] = useState({
    subject: '',
    description: ''
  });

  // Refs for elements to animate
  const headerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const faqRefs = useRef([]);

  // Animation states
  const [animations, setAnimations] = useState({
    header: false,
    leftSection: false,
    rightSection: false,
    faqs: []
  });

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

  // Initialize FAQ refs array
  useEffect(() => {
    faqRefs.current = faqRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  // Set up Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const isVisible = entry.isIntersecting;

        if (target === headerRef.current) {
          setAnimations(prev => ({ ...prev, header: isVisible }));
        } else if (target === leftSectionRef.current) {
          setAnimations(prev => ({ ...prev, leftSection: isVisible }));
        } else if (target === rightSectionRef.current) {
          setAnimations(prev => ({ ...prev, rightSection: isVisible }));
        } else {
          // Handle FAQ items
          const faqIndex = faqRefs.current.indexOf(target);
          if (faqIndex !== -1) {
            setAnimations(prev => ({
              ...prev,
              faqs: prev.faqs.map((faq, index) => 
                index === faqIndex ? isVisible : faq
              )
            }));
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);
    
    faqRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Initialize FAQ animations array
  useEffect(() => {
    setAnimations(prev => ({
      ...prev,
      faqs: new Array(faqs.length).fill(false)
    }));
  }, [faqs.length]);

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

  const handleSubmitQuestion = () => {
    console.log('Question submitted:', questionForm);
    // Handle form submission here
    setQuestionForm({ subject: '', description: '' });
  };

  return (
    <section className="relative">
      {/* Glow OUTSIDE the content container */}
      <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-8 left-8 w-[24rem] h-[24rem] bg-purple-400 rounded-full blur-2xl opacity-15 pointer-events-none z-0"></div>
      <div className="absolute top-16 left-16 w-[16rem] h-[16rem] bg-purple-600 rounded-full blur-xl opacity-10 pointer-events-none z-0"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="top-20 relative py-16 px-4 overflow-hidden mx-auto max-w-5xl md:px-8 lg:px-16">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`mb-16 transition-all duration-1000 ease-out ${
              animations.header 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              OUR COMMUNITY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Community's{' '}
              <span className="bg-gray-700 text-white px-3 py-1 rounded">
                questions
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Section - Illustration and Question Form */}
            <div 
              ref={leftSectionRef}
              className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
                animations.leftSection 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Question Illustration */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Replace this div with your question.png image */}
                  <div className="relative">
                  {/* Replace this div with your question.png image */}
                  <img 
                  src="question.png" 
                  alt="Person with questions" 
                  className="w-120 h-120 object-contain" 
                  />

                </div>
                </div>
              </div>

              {/* Question Submission Form */}
              <div className="bg-black rounded-lg p-6 text-white transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Don't find your answer!</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Don't worry, write your question here and our support team will help you.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={questionForm.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Describe your Project</label>
                    <textarea
                      name="description"
                      value={questionForm.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-transparent border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder=""
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmitQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors transform hover:scale-105"
                  >
                    SUBMIT QUESTION
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - FAQ List */}
            <div 
              ref={rightSectionRef}
              className={`space-y-4 transition-all duration-1000 ease-out delay-400 ${
                animations.rightSection 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  ref={el => faqRefs.current[index] = el}
                  className={`bg-black rounded-lg overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 ${
                    animations.faqs[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                  >
                    <span className="text-white font-medium pr-4 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-white transform transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white transform transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;