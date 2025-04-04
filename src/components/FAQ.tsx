import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-2xl p-6 bg-white shadow-md">
          <button
            className="flex justify-between items-center w-full text-left font-bold font-montserrat text-lg text-secondary-dark"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <MinusIcon className="w-5 h-5 text-base font-bold" />
            ) : (
              <PlusIcon className="w-5 h-5 text-base font-bold" />
            )}
          </button>
          <div
            className={`mt-2 overflow-hidden transition-all duration-1000 ${
              openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-md font-montserrat font-medium text-base">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
