import React from "react";
import ChatBot from "react-simple-chatbot";

const ChatBotComponent = () => {

  const steps = [
    {
      id: "1",
      message: "Hello! How can I help you?",
      trigger: "options"
    },
    {
      id: "options",
      options: [
        { value: "services", label: "What services do you offer?", trigger: "services" },
        { value: "price", label: "What is the price?", trigger: "price" },
        { value: "contact", label: "How can I contact you?", trigger: "contact" }
      ]
    },
    {
      id: "services",
      message: "We provide Architecture and Interior Design services.",
      trigger: "options"
    },
    {
      id: "price",
      message: "Pricing depends on the project requirements.",
      trigger: "options"
    },
    {
      id: "contact",
      message: "You can contact us through our contact form.",
      trigger: "options"
    }
  ];

  return (
    <ChatBot
      steps={steps}
      floating={true}
    />
  );
};

export default ChatBotComponent;