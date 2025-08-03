import { motion } from "framer-motion";
import { useState } from "react";
import lottie from '../../../assets/lottie/online-learning.json'
import Lottie from "lottie-react";

// Enhanced Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dynamic Gradient Base */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          // background: [
          //   "linear-gradient(45deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)",
          //   "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #0a0a0a 100%)",
          //   "linear-gradient(225deg, #1a1a1a 0%, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%, #1a1a1a 100%)",
          //   "linear-gradient(315deg, #2a2a2a 0%, #3a3a3a 25%, #1f1f1f 50%, #3a3a3a 75%, #2a2a2a 100%)",
          // ]
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
      <div className="absolute inset-0 opacity-20">
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
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
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
      
      {/* Sparkle Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `hsl(${240 + Math.random() * 60}, 70%, 70%)`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
          }}
          animate={{
            y: [0, Math.random() * -200 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-32 left-20 w-20 h-20 border-2 border-cyan-400/30"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
          borderColor: ["rgba(34, 211, 238, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(99, 102, 241, 0.3)", "rgba(34, 211, 238, 0.3)"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-32 w-16 h-16 border-2 border-pink-400/30 rounded-lg"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
          borderColor: ["rgba(236, 72, 153, 0.3)", "rgba(99, 102, 241, 0.3)", "rgba(34, 211, 238, 0.3)", "rgba(236, 72, 153, 0.3)"]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing Rings */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/10 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-24 h-24 border border-white/10 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

// Offer Badge Component
const OfferBadge = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5 
      }}
      className="relative"
    >
      <motion.div
        className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl border-2 border-white/20"
        animate={{
          boxShadow: [
            "0 0 20px rgba(239, 68, 68, 0.5)",
            "0 0 40px rgba(236, 72, 153, 0.8)",
            "0 0 20px rgba(239, 68, 68, 0.5)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.span
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔥 LIMITED TIME: 60% OFF
        </motion.span>
        
        {/* Sparkle Effect */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Floating "HOT" badge */}
      <motion.div
        className="absolute -top-3 -right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-black"
        animate={{
          y: [-2, 2, -2],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        HOT
      </motion.div>
    </motion.div>
  );
};

// Hero Highlight Components
const HeroHighlight = ({ children, className }) => {
  return (
    <div className={`relative h-[90vh] w-full bg-black ${className}`}>
      <AnimatedBackground />
      <div className="absolute pointer-events-none inset-0 bg-black/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
      className={`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 dark:from-yellow-400 dark:via-pink-400 dark:to-purple-400 ${className}`}
    >
      {children}
    </motion.span>
  );
};

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <HeroHighlight className="flex justify-center" >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-20 absolute z-10 h-full flex items-center content-center justify-center px-8 md:px-16 lg:px-24"
      >
        {/* Left Content */}
        <div className="mt-10 flex-1 ">
          {/* Offer Badge */}
          {/* <motion.div variants={itemVariants} className="mb-6">
            <OfferBadge />
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Grow{" "}
            <Highlight className="text-black font-extrabold">
            Confidently
            </Highlight>{" "}
            with{" "}
            <motion.span
              className="
              bg-gradient-to-r from-yellow-400 via-amber-600 to-red-500

              bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.02,
                filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
              }}
              transition={{ duration: 0.3 }}
            >
              Learnica Academy
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
          >
            Top-rated online platform for{" "}
            
            {/* <Highlight className="text-black dark:text-white font-bold">
              UIU students
            </Highlight> */}

            UIU students
            
            {" "}
            to learn, grow, and excel with{" "}
            
            {/* <Highlight className="text-black dark:text-white font-bold">
              real industry-focused
            </Highlight> */}

            real industry-focused
            
            {" "}
            courses.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href="#courses"
              className="relative px-8 py-4 bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 text-white rounded-full font-bold text-lg overflow-hidden group shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                🚀 Get 60% OFF Now
              </span>
            </motion.a>

            <motion.a
              href="#benefits"
              className="px-8 py-4 border-2 border-yellow-400/50 text-white rounded-full font-bold text-lg hover:border-yellow-400 hover:bg-purple-400/10 transition-all backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Explore Benefits</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-lg mb-6"
          >
            {[
  
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-default relative"
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2 }}
              >
                <motion.div 
                  className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative`}
                  animate={{
                    filter: ["drop-shadow(0 0 0px currentColor)", "drop-shadow(0 0 10px currentColor)", "drop-shadow(0 0 0px currentColor)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm mt-1 group-hover:text-white transition-colors font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Feature Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {[
              { text: 'Interactive Learning', color: 'from-blue-500 to-cyan-500' },
              { text: 'Industry Certified', color: 'from-purple-500 to-pink-500' },
              { text: 'Flexible Schedule', color: 'from-green-500 to-blue-500' },
              { text: '24/7 Support', color: 'from-red-500 to-orange-500' }
            ].map((feature, index) => (
              <motion.span
                key={feature.text}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all cursor-default relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + index * 0.1 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20`}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{feature.text}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Enhanced Lottie Animation */}
        <motion.div
          variants={itemVariants}
          className=" hidden lg:flex flex-1 justify-center items-center ml-8"
        >
          <motion.div
            className="w-full max-w-lg h-96 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced Lottie Container */}
            <div className="relative z-30">
              <Lottie 
                animationData={lottie} 
                loop={true} 
                className="w-2xl drop-shadow-2xl filter  relative z-40"
              />
              
              {/* Multi-layered Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-purple-800/30 to-cyan-800/30 rounded-full blur-2xl z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 rounded-full blur-2xl z-0"
                animate={{
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Enhanced Orbiting Elements */}
              <motion.div
                className="absolute top-1/4 right-0 w-6 h-6 bg-gradient-to-r shadow-lg z-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "-120px 120px",
                  filter: "drop-shadow(0 0 10px currentColor)"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 left-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg z-20"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "120px -120px",
                  filter: "drop-shadow(0 0 8px currentColor)"
                }}
              />
              
              <motion.div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg z-20"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 2, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "0px -80px",
                  filter: "drop-shadow(0 0 6px currentColor)"
                }}
              />
            </div>


            
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Interactive Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovered 
            ? 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)'
        }}
        transition={{ duration: 1 }}
      />
    </HeroHighlight>
  );
};

export default Banner;