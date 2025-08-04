import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import circleText from '../../../assets/lottie/CircleText.json';
import Lottie from 'lottie-react';

// Icons Component (using emojis for simplicity)
const IconWrapper = ({ children, className = "" }) => (
  <div className={`text-4xl mb-4 ${className}`}>
    {children}
  </div>
);

// Enhanced Card Component
const FeatureCard = ({ icon, title, description, index, gradient, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Background with glassmorphism */}
      <motion.div
        className="relative h-full bg-white/4 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden"
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 opacity-0 bg-gradient-to-br ${gradient}`}
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glowing border effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur-xl`}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />

        {/* Corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-3xl`}
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.2 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon with animation */}
        <motion.div
          className="relative z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <IconWrapper className="text-5xl mb-6">
            <motion.span
              animate={{
                filter: isHovered
                  ? `drop-shadow(0 0 20px ${accentColor})`
                  : 'drop-shadow(0 0 0px transparent)'
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.span>
          </IconWrapper>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-white mb-4 relative z-10"
          animate={{
            color: isHovered ? '#ffffff' : '#e5e7eb',
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-300 leading-relaxed relative z-10"
          animate={{
            color: isHovered ? '#d1d5db' : '#9ca3af',
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full`}
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -50, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};



// Main Component
const WhyChooseUs = () => {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of teaching and real-world experience.",
      gradient: "from-blue-500 to-cyan-500",
      accentColor: "#0ea5e9"
    },
    {
      icon: "🕒",
      title: "Flexible Learning",
      description: "Study anytime, anywhere—perfectly suited for students, job holders, and backbenchers.",
      gradient: "from-purple-500 to-pink-500",
      accentColor: "#a855f7"
    },
    {
      icon: "💸",
      title: "Affordable Excellence",
      description: "Premium-quality content at prices anyone can afford. No compromise on value.",
      gradient: "from-green-500 to-teal-500",
      accentColor: "#10b981"
    },
    {
      icon: "🤝",
      title: "1-on-1 Mentorship",
      description: "Get personal guidance, doubt-clearing sessions, and dedicated mentor support.",
      gradient: "from-orange-500 to-red-500",
      accentColor: "#f97316"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    // <section className="relative pt-24 pb-16 bg-black overflow-hidden">
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      
      {/*
      <div className="absolute inset-0">
   
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />
        </div>
      </div>
      */}



      {/* Background Elements */}
      <div className="absolute inset-0">
                {/* Animated Background Gradients */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '100px 100px',
                        }}
                    />
                </div>
            </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              ✨ Why Choose Learnica Academy
            </motion.span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Built for{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              UIU Students
            </motion.span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We understand the unique challenges faced by UIU students. That's why we've created 
            a learning platform that fits perfectly into your academic journey.
          </motion.p>
        </motion.div> */}

        {/* Section header */}
        {/* Section header */}
        <motion.div
          className={`mb-20 text-center max-w-3xl mx-auto`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="leading-tight flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl text-white font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              Why
              <span className="relative inline-block mx-2">
                {/* Gradient applied to "Choose Us" together */}
                <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-500 to-yellow-600 bg-clip-text text-transparent">
                  Choose Us
                </span>

                {/* Circle animation centered over “Choose” */}
                <Lottie
                  animationData={circleText}
                  loop={true}
                  className="absolute top-1/2 left-[35%] w-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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
            We understand the unique challenges faced by UIU students. That's why we've created
            a learning platform that fits perfectly into your academic journey.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          {/* <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-2xl relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Learning Today</span>
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-full font-bold text-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Courses
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
