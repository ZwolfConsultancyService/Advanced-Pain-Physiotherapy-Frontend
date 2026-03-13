import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is physiotherapy?",
      answer:
        "Physiotherapy is a treatment that helps reduce pain, improve movement, and restore physical function through exercises, manual therapy, and specialized techniques.",
    },
    {
      question: "When should I visit a physiotherapist?",
      answer:
        "You should visit a physiotherapist if you have pain in your back, neck, joints, muscles, or if you are recovering from an injury or surgery.",
    },
    {
      question: "How many physiotherapy sessions are required?",
      answer:
        "The number of sessions depends on the type and severity of the condition. Your physiotherapist will assess your problem and recommend a suitable treatment plan.",
    },
    {
      question: "Is physiotherapy safe?",
      answer:
        "Yes, physiotherapy is a safe and non-invasive treatment method when performed by a qualified physiotherapist.",
    },
    {
      question: "How long does a physiotherapy session take?",
      answer:
        "A physiotherapy session usually takes around 30 to 60 minutes, depending on the treatment required.",
    },
    {
      question: "Can physiotherapy help with back pain?",
      answer:
        "Yes, physiotherapy is one of the most effective treatments for back pain. It helps strengthen muscles, improve posture, and reduce pain.",
    },
    {
      question: "Do I need a doctor's referral for physiotherapy?",
      answer:
        "In most cases, you can directly consult a physiotherapist without a referral.",
    },
    {
      question: "Can physiotherapy help after surgery?",
      answer:
        "Yes, physiotherapy plays an important role in recovery after surgeries like knee replacement, ligament repair, or spine surgery.",
    },
    {
      question: "What should I wear during a physiotherapy session?",
      answer:
        "It is recommended to wear comfortable clothes that allow easy movement during exercises and treatment.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling the clinic, sending a WhatsApp message, or filling out the appointment form on the website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-10 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div
            className="flex-1"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#edf7d9] rounded-lg flex items-center justify-center">
                <span className="text-[#8ab72e] text-xl">✚</span>
              </div>
              <span className="text-[#8ab72e]">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div
          className="space-y-4"
          style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
        >
          {faqs.slice(0, showAll ? faqs.length : 6).map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
              style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left hover:opacity-70 transition-opacity"
              >
                <h3 className="text-2xl text-gray-700 pr-4">{faq.question}</h3>
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

        {/* View More / View Less Button */}
        {faqs.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#8ab72e] text-[#8ab72e] font-semibold text-base hover:bg-[#8ab72e] hover:text-white transition-all duration-300"
              style={{ fontFamily: "'Gantari', sans-serif" }}
            >
              {showAll ? (
                <>
                  <Minus className="w-4 h-4" /> View Less
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" /> View More ({faqs.length - 6} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}