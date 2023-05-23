import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqItems }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse the question if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {faqItems.map((faqItem, index) => (
          <div
            key={index}
            className={`bg-[#060606] rounded-lg p-4 ${
              expandedIndex === index ? "border-2 border-grey-300" : ""
            }`}
            onClick={() => handleQuestionClick(index)}
          >
            <h3 className="text-lg font-bold text-white mb-2">{faqItem.question}</h3>
            {expandedIndex === index && (
              <p className="text-gray-300">{faqItem.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
