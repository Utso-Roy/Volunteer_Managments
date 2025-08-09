import React, { useState } from "react";

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
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10 my-10 bg-white dark:bg-[#1d232a] rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#0a72ba] mb-8">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 cursor-pointer flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold text-[#0267af] dark:text-blue-400">
                {faq.question}
              </span>
              <span className="text-2xl text-[#0a72ba]">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
