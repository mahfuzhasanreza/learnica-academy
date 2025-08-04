import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

// Course Card Component
const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Main Card Container */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
        whileHover={{ 
          y: -15,
          scale: 1.02,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-yellow-600/20 via-red-600/20 to-orange-600/20"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/30 via-red-500/30 to-orange-500/30 opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{ zIndex: -1 }}
        />

        {/* Course Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-cyan-900/50"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Placeholder for course image */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-6xl"
              animate={{
                rotate: isHovered ? 5 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              💻
            </motion.div>
          </motion.div>
          
          {/* Course Code Badge */}
          <motion.div
            className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            {course.code}
          </motion.div>
          
          {/* Discount Badge */}
          {course.discount && (
            <motion.div
              className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 10px rgba(239, 68, 68, 0.5)",
                  "0 0 20px rgba(236, 72, 153, 0.8)",
                  "0 0 10px rgba(239, 68, 68, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {course.discount}% OFF
            </motion.div>
          )}
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Course Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-3 leading-tight"
            animate={{
              color: isHovered ? '#ffffff' : '#e5e7eb',
            }}
            transition={{ duration: 0.3 }}
          >
            {course.title}
          </motion.h3>
          
          {/* Mentor Info */}
          <motion.div
            className="flex items-center gap-3 mb-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              👨‍🏫
            </div>
            <div>
              <div className="text-sm text-gray-400">Mentor</div>
              <div className="text-white font-semibold">{course.mentor}</div>
            </div>
          </motion.div>
          
          {/* Start Date */}
          <motion.div
            className="flex items-center gap-2 mb-4 text-gray-300"
            whileHover={{ color: '#d1d5db' }}
          >
            <span className="text-lg">📅</span>
            <span className="font-medium">Starting: {course.startDate}</span>
          </motion.div>
          
          {/* Pricing */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              {course.originalPrice && (
                <span className="text-gray-500 line-through text-lg">
                  ৳{course.originalPrice}
                </span>
              )}
              <motion.span
                className="text-3xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                ৳{course.price}
              </motion.span>
            </div>
            {course.originalPrice && (
              <div className="text-sm text-green-400 font-semibold">
                Save ৳{course.originalPrice - course.price}
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold text-sm relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">🛒 Purchase</span>
            </motion.button>
            
            <motion.button
              className="px-6 py-3 border-2 border-purple-500/50 text-white rounded-xl font-bold text-sm hover:border-purple-500 hover:bg-purple-500/20 transition-all backdrop-blur-sm"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(168, 85, 247, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              📋 Details
            </motion.button>
          </div>
        </div>
        
        {/* Floating particles on hover */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{
                  x: Math.random() * 400,
                  y: Math.random() * 300,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -80, -160],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
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

// Main Our Courses Component
const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      code: "WD101",
      mentor: "Jhanker Mahbub",
      startDate: "August 15, 2025",
      originalPrice: 5000,
      price: 4000,
      discount: 20,
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "React.js Mastery Course",
      code: "RJS201",
      mentor: "Sumit Saha",
      startDate: "August 20, 2025",
      originalPrice: 4500,
      price: 3600,
      discount: 20,
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Full Stack JavaScript",
      code: "FSJ301",
      mentor: "HM Nayem",
      startDate: "August 25, 2025",
      originalPrice: 6000,
      price: 4800,
      discount: 20,
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Python for Beginners",
      code: "PY101",
      mentor: "Rafeh Qazi",
      startDate: "September 1, 2025",
      originalPrice: 3500,
      price: 2800,
      discount: 20,
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      code: "UX101",
      mentor: "Design Monk",
      startDate: "September 5, 2025",
      originalPrice: 4000,
      price: 3200,
      discount: 20,
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Data Science Bootcamp",
      code: "DS201",
      mentor: "Moshiur Rahman",
      startDate: "September 10, 2025",
      originalPrice: 7000,
      price: 5600,
      discount: 20,
      image: "/api/placeholder/400/200"
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
    <section className="relative min-h-screen py-24 bg-black overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              🚀 Start Your Journey
            </motion.span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Premium Courses
            </motion.span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Handpicked courses designed specifically for UIU students. Learn from industry experts 
            and build skills that matter in today's competitive job market.
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>

        {/* View All Courses CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              📚 View All Courses
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCourses;