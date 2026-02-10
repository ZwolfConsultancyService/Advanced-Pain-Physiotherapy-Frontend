import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to recover?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How long does it take to recover?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can I get therapy at home?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-10 px-2"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}  
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div className="flex-1"
           style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#edf7d9] rounded-lg flex items-center justify-center">
                <span className="text-[#8ab72e] text-xl">✚</span>
              </div>
              <span className="text-[#8ab72e]">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900">
              Frequently Ask Question
            </h2>
          </div>
          
        </div>

        {/* FAQ Items */}
        <div className="space-y-4"
         style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4"
             style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left hover:opacity-70 transition-opacity"
              >
                <h3 className="text-2xl  text-gray-700 pr-4">{faq.question}</h3>
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#8ab72e] text-white"
                      : "bg-white border-2 border-gray-300 text-gray-600"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-lg leading-relaxed pb-4 pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
