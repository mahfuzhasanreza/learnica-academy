import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Learnico?",
    answer:
      "Learnico is a modern e-learning platform where students can purchase premium courses and access free resources."
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply sign up, browse the courses, and click on 'Enroll Now' to start learning."
  },
  {
    question: "Can instructors upload their own courses?",
    answer:
      "Yes! Instructors can apply through the Instructor Panel and publish their own premium or free courses."
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support bKash, Nagad, Rocket, credit/debit cards, and other local gateways."
  },
  {
    question: "Is there any refund policy?",
    answer:
      "Yes, we offer a 7-day refund policy under specific conditions. Please check our refund page for more details."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
