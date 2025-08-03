import { motion } from "framer-motion";
import { useState } from "react";
import lottie from '../../../assets/lottie/online-learning.json'
import Lottie from "lottie-react";

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Moving Mesh Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 60%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 rounded-lg"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-32 w-16 h-16 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-10">
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path
            d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </motion.svg>
        
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: -2
          }}
        >
          <path
            d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z"
            fill="white"
          />
        </motion.svg>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 800px 600px at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            "radial-gradient(ellipse 600px 800px at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            "radial-gradient(ellipse 800px 600px at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Hero Highlight Components from Aceternity UI
const HeroHighlight = ({ children, className }) => {
  return (
    <div className={`relative h-[90vh] w-full bg-black ${className}`}>
      <AnimatedBackground />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex items-center justify-between px-8 md:px-16 lg:px-24"
      >
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Main Heading with Hero Highlight */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
            className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl"
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
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#courses"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">
                Browse Courses
              </span>
            </motion.a>

            <motion.a
              href="#benefits"
              className="px-8 py-4 border border-neutral-600 text-white rounded-full font-semibold text-lg hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Benefits
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-lg mb-6"
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
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
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
            className="flex flex-wrap gap-3"
          >
            {['Interactive Learning', 'Industry Certified', 'Flexible Schedule', '24/7 Support'].map((feature, index) => (
              <motion.span
                key={feature}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm text-neutral-300 rounded-full text-sm font-medium border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
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

        {/* Right Side - Lottie Animation */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex flex-1 justify-center items-center ml-8"
        >
          <motion.div
            className="w-full max-w-lg h-96 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Lottie Container with Glow Effect */}
            <div className="relative">
              <Lottie 
                animationData={lottie} 
                loop={true} 
                className="w-full h-full drop-shadow-2xl"
              />
              
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Orbiting Elements */}
              <motion.div
                className="absolute top-1/4 right-0 w-4 h-4 bg-blue-400 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "-100px 100px"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 left-0 w-3 h-3 bg-purple-400 rounded-full"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "100px -100px"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Hover Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovered 
            ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)'
        }}
        transition={{ duration: 0.8 }}
      />
    </HeroHighlight>
  );
};

export default Banner;