import { motion } from "framer-motion";
import { useState } from "react";
import lottie from '../../../assets/lottie/online-learning.json'
import Lottie from "lottie-react";

// Hero Highlight Components from Aceternity UI
const HeroHighlight = ({ children, className }) => {
  return (
    <div
      className={`relative h-[90vh] w-full bg-black bg-grid-white/[0.02] ${className}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 1,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 ${className}`}
    >
      {children}
    </motion.span>
  );
};

// Floating elements component
const FloatingElements = () => {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 border border-blue-500/30 rounded-full"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-24 h-24 border border-purple-500/30 rounded-lg rotate-45"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-32 w-16 h-16 border border-cyan-500/30 rounded-full"
        style={{ animationDelay: '4s' }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 w-20 h-20 border border-pink-500/30 rounded-lg rotate-12"
        style={{ animationDelay: '1s' }}
      />
    </>
  );
};

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroHighlight>
      <FloatingElements />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex items-center justify-start px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-4xl">
          {/* Main Heading with Hero Highlight */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Learn{" "}
            <Highlight className="text-black dark:text-white">
              Smarter
            </Highlight>{" "}
            with{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Learnica Academy
            </motion.span>
          </motion.h1>

          {/* Subtitle with highlights */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed max-w-3xl"
          >
            Top-rated online platform for{" "}
            <Highlight className="text-black dark:text-white font-semibold">
              UIU students
            </Highlight>{" "}
            to learn, grow, and excel with{" "}
            <Highlight className="text-black dark:text-white font-semibold">
              real industry-focused
            </Highlight>{" "}
            courses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              href="#courses"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors">
                Browse Courses
              </span>
            </motion.a>

            <motion.a
              href="#benefits"
              className="px-8 py-4 border border-neutral-600 text-white rounded-full font-semibold text-lg hover:border-white hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Benefits
            </motion.a>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {[
              { number: "500+", label: "Active Students" },
              { number: "50+", label: "Expert Instructors" },
              { number: "100+", label: "Course Modules" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-neutral-400 text-sm mt-1 group-hover:text-neutral-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mt-8"
          >
            {['Interactive Learning', 'Industry Certified', 'Flexible Schedule', '24/7 Support'].map((feature, index) => (
              <motion.span
                key={feature}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-full text-sm font-medium border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-700 transition-all cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div>
          <Lottie animationData={lottie} loop={true} />
        </div>

      </motion.div>

      {/* Background gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovered 
            ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)'
        }}
        transition={{ duration: 0.8 }}
      />
    </HeroHighlight>
  );
};

export default Banner;