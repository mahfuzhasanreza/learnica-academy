import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import circleText from '../../../assets/lottie/CircleText.json';


// Icons
const ChevronDownIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const QuestionMarkIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
  </svg>
);

// Enhanced Animated Background Component (matching Banner style)
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Gradient Base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neon Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Enhanced Moving Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(30px)"
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.7, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(50px)"
        }}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-32 left-20 w-20 h-20 border-2 border-cyan-400/20"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
          borderColor: ["rgba(34, 211, 238, 0.2)", "rgba(236, 72, 153, 0.2)", "rgba(99, 102, 241, 0.2)", "rgba(34, 211, 238, 0.2)"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div 
      className="group mb-6 opacity-0 transform translate-y-8"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-102">
        {/* Question Header */}
        <button
          onClick={onToggle}
          className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <QuestionMarkIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 flex-1 pr-4">
              {question}
            </h3>
          </div>
          <div className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-indigo-500/20' : 'group-hover:bg-white/20'}`}>
            <ChevronDownIcon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
          </div>
        </button>

        {/* Answer Content */}
        <div 
          ref={contentRef}
          style={{
            height: `${height}px`,
            transition: 'height 0.3s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <div className="px-8 pb-8 pt-2">
            <div className="pl-16">
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/50 to-blue-500/50 mb-6" />
              <p className="text-gray-300 leading-relaxed text-lg">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      id: 1,
      question: 'What is Learnica and how does it work?',
      answer: 'Learnica is a cutting-edge online learning platform that offers interactive courses, personalized learning paths, and real-time progress tracking.'
    },
    {
      id: 2,
      question: 'How do I get started with my learning journey?',
      answer: 'Getting started is simple! Create your free account, take our quick assessment to determine your current skill level.'
    },
    {
      id: 3,
      question: 'What types of courses and support do you offer?',
      answer: 'We offer comprehensive courses in Programming, Data Science, Digital Marketing, Design, Business Leadership.'
    },
    {
      id: 4,
      question: 'What are your pricing options and refund policy?',
      answer: 'We offer flexible pricing with individual courses, monthly subscriptions, and annual plans.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-24 overflow-hidden min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section header */}
        <motion.div
          className={`mb-10 text-center max-w-3xl mx-auto`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="leading-tight flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl text-white font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              Frequently
              <span className="relative inline-block mx-2">
                {/* Gradient applied to "Choose Us" together */}
                <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-500 to-yellow-600 bg-clip-text text-transparent">
                  Asked Questions
                </span>

                {/* Circle animation centered over “Choose” */}
                <Lottie
                  animationData={circleText}
                  loop={true}
                  className="absolute top-1/2 left-[19%] w-52 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
              </span>
            </h2>
          </div>

          <motion.p
            className="mt-7 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Learn from industry professionals who bring real-world experience and passion for teaching. Our mentors are here to guide you every step of the way.
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;