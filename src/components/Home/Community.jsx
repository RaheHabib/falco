import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Community = () => {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default
  const [questionForm, setQuestionForm] = useState({
    subject: '',
    description: ''
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
    <div className="top-20 relative py-16 px-4 overflow-hidden mx-auto max-w-5xl md:px-8 lg:px-16">
      {/* Background decorative elements */}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
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
          <div className="space-y-8">
            {/* Question Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Replace this div with your question.png image */}
                <img 
                src="question.png" 
                alt="Person with questions" 
                className="w-120 h-120 object-contain" 
                />

              </div>
            </div>

            {/* Question Submission Form */}
            <div className="bg-black rounded-lg p-6 text-white">
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  SUBMIT QUESTION
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden">
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
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar (like in your image) */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-6 py-3 flex items-center space-x-4 shadow-lg z-50">
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1 13H6L7 4z" />
          </svg>
          <span>Start editing</span>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Community;