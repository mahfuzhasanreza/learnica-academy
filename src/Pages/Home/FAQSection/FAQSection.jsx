import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Learnica Academy?",
      answer:
        "Learnica Academy is a student-led aerospace project team from United International University that designs, builds, and launches satellite prototypes called CanSats for various competitions.",
    },
    {
      question: "Who can join the team?",
      answer:
        "Any enthusiastic student from UIU, regardless of department or level, can apply to join during the recruitment period.",
    },
    {
      question: "What skills are required to join Learnica Academy?",
      answer:
        "Both beginners and experienced students are welcome. Skills in programming, electronics, design, research, writing, or management are all valuable.",
    },
    {
      question: "How often does the team meet?",
      answer:
        "The frequency of meetings depends on the project timeline. During intense phases, meetings are held weekly or more often.",
    },
    {
      question: "Is Learnica Academy only about technical work?",
      answer:
        "Not at all. We also need members for documentation, sponsorship, marketing, event coordination, and more.",
    },
    {
      question: "Where can I learn more or get involved?",
      answer:
        "Follow our official Facebook page or check our website. We regularly post recruitment and update announcements.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12" id="faq">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 hover:shadow transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 transition-opacity duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
