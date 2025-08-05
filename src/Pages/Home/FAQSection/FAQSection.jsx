import React, { useState, useEffect } from 'react';

// Enhanced Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Gradient Base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0f0f23 25%, #1a0033 50%, #000a1a 75%, #000000 100%)
          `
        }}
      />

      {/* Animated Mesh Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'meshFloat 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            top: `${10 + i * 20}%`,
            left: `${5 + i * 18}%`,
            background: `radial-gradient(circle, ${
              ['rgba(99, 102, 241, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(16, 185, 129, 0.4)', 
               'rgba(245, 158, 11, 0.4)', 'rgba(239, 68, 68, 0.4)'][i]
            } 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `float${i + 1} ${12 + i * 3}s ease-in-out infinite`
          }}
        />
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-pink-400/20 rotate-45 animate-spin" 
           style={{ animationDuration: '15s' }} />
      <div className="absolute top-1/2 right-32 w-20 h-20 border-2 border-blue-400/20 transform rotate-12" 
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'bounce 4s infinite' }} />
    </div>
  );
};

// Icons
const ChevronDownIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const SearchIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const QuestionMarkIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
  </svg>
);

const LightBulbIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
  </svg>
);

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onToggle, index, category }) => {
  const categoryColors = {
    general: 'from-indigo-500 to-blue-500'
  };

  return (
    <div 
      className="group mb-6 opacity-0 transform translate-y-8"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-102">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Question Header */}
        <button
          onClick={onToggle}
          className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryColors[category]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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

// Category Filter Component
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 backdrop-blur-xl shadow-xl ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-white/30 scale-105 shadow-2xl'
              : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-white hover:scale-105 hover:border-white/40'
          }`}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 ${activeCategory === category.id ? 'opacity-100' : 'group-hover:opacity-20'}`} />
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-xl">{category.icon}</span>
            {category.name}
            <span className={`px-2 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              activeCategory === category.id 
                ? 'bg-white/20 text-white' 
                : 'bg-purple-500/20 text-purple-300 group-hover:bg-white/20 group-hover:text-white'
            }`}>
              {category.count}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

// Search Component
const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        <div className="relative flex items-center">
          <SearchIcon className="w-6 h-6 text-gray-400 ml-6" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search frequently asked questions..."
            className="w-full px-6 py-5 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const faqData = [
    {
      id: 1,
      category: 'general',
      question: 'What is Learnica and how does it work?',
      answer: 'Learnica is a cutting-edge online learning platform that offers interactive courses, personalized learning paths, and real-time progress tracking. Our AI-powered system adapts to your learning style and pace, ensuring you get the most effective education experience possible.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How do I get started with my learning journey?',
      answer: 'Getting started is simple! Create your free account, take our quick assessment to determine your current skill level, browse our extensive course catalog, and enroll in courses that match your goals. You can start learning immediately after enrollment with lifetime access to all materials.'
    },
    {
      id: 3,
      category: 'general',
      question: 'What types of courses and support do you offer?',
      answer: 'We offer comprehensive courses in Programming, Data Science, Digital Marketing, Design, Business Leadership, and emerging technologies like AI. All courses include expert instruction, hands-on projects, verified certificates, career guidance, and 24/7 support to ensure your success.'
    },
    {
      id: 4,
      category: 'general',
      question: 'What are your pricing options and refund policy?',
      answer: 'We offer flexible pricing with individual courses, monthly subscriptions, and annual plans. We accept all major payment methods including credit cards, PayPal, and cryptocurrency. All purchases come with a 30-day money-back guarantee - if you are not completely satisfied, contact us for a full refund.'
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-32 overflow-hidden min-h-screen">
      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 25px) scale(0.9); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(1.2); }
          66% { transform: translate(30px, -20px) scale(0.8); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, 35px) scale(0.9); }
          66% { transform: translate(-20px, -15px) scale(1.1); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 30px) scale(1.1); }
          66% { transform: translate(35px, -25px) scale(0.9); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -35px) scale(1.2); }
          66% { transform: translate(-30px, 20px) scale(0.8); }
        }
        
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
        
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-8">
            <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-2xl border border-indigo-500/30 rounded-full text-indigo-200 text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
              <QuestionMarkIcon className="w-6 h-6" />
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            Got{" "}
            <span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(147, 51, 234, 0.5)"
              }}
            >
              Questions?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Find answers to the most common questions about our platform, courses, and services. 
            Can't find what you're looking for? Our support team is here to help!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                index={index}
                category={item.category}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <LightBulbIcon className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Questions Found</h3>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                We couldn't find any questions matching your search. Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}
        </div>

        
      </div>
    </section>
  );
};

export default FAQSection;