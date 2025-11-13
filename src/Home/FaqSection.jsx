import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";

const faqs = [
  {
    question: "How can I become a volunteer?",
    answer:
      "You can join as a volunteer by submitting a post through our website or contacting us directly.",
  },
  {
    question: "Is there any age limit to become a volunteer?",
    answer:
      "Yes, generally anyone aged 18 or above can volunteer. Some specific programs might have different age criteria.",
  },
  {
    question: "Do I have to pay any fees to volunteer?",
    answer:
      "No, volunteering is completely free and based on your willingness to contribute.",
  },
  {
    question: "How much time do I need to commit as a volunteer?",
    answer:
      "You can volunteer as much time as you want or are able to. There is no fixed obligation.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative w-full px-6 md:px-8 py-16  bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0f1419] dark:via-[#1d232a] dark:to-[#0f1419] rounded-3xl overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0267af]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a72ba]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-2xl shadow-lg mb-6 animate-pulse">
            <FaQuestionCircle className="text-4xl text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#0267af] to-[#0a72ba] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Everything you need to know about volunteering with us
          </p>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0267af] to-[#0a72ba] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-[#242b35] rounded-2xl shadow-lg transition-all duration-300 overflow-hidden ${
                activeIndex === index ? 'shadow-2xl' : 'hover:shadow-xl'
              }`}
            >
              {/* Gradient Border on Active */}
              {activeIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#0267af] to-[#0a72ba] opacity-100 rounded-2xl">
                  <div className="absolute inset-[2px] bg-white dark:bg-[#242b35] rounded-2xl"></div>
                </div>
              )}

              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative z-10 w-full text-left px-6 md:px-8 py-5 md:py-6 cursor-pointer flex justify-between items-center focus:outline-none group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-br from-[#0267af] to-[#0a72ba]' 
                      : 'bg-gray-100 dark:bg-[#1d232a] group-hover:bg-gradient-to-br group-hover:from-[#0267af] group-hover:to-[#0a72ba]'
                  }`}>
                    <span className={`text-sm font-bold transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'text-white' 
                        : 'text-[#0267af] dark:text-blue-400 group-hover:text-white'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    activeIndex === index 
                      ? 'text-[#0267af] dark:text-blue-300' 
                      : 'text-gray-800 dark:text-gray-200 group-hover:text-[#0267af] dark:group-hover:text-blue-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>

                {/* Toggle Icon */}
                <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-br from-[#0267af] to-[#0a72ba] rotate-180' 
                    : 'bg-gray-100 dark:bg-[#1d232a] group-hover:bg-[#0267af]/10'
                }`}>
                  <FaChevronDown className={`text-lg transition-colors duration-300 ${
                    activeIndex === index 
                      ? 'text-white' 
                      : 'text-[#0267af] dark:text-blue-400'
                  }`} />
                </div>
              </button>

              {/* Answer Section */}
              <div
                className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <div className="pl-14 pr-4">
                    <div className="w-full h-px bg-gradient-to-r from-[#0267af]/20 to-transparent mb-4"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="group relative px-8 py-3 bg-gradient-to-r from-[#0267af] to-[#0a72ba] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to='/contact'>
            
              <span className="relative z-10">Contact Us</span>
            </Link>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;