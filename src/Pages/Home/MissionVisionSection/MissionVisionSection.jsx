// components/MissionVisionSection.jsx

import { motion, useInView } from "framer-motion";
import { Target, Eye, Rocket, Sparkles, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import cansatLogo from '../../../assets/logo/cansat-logo.png';

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-slate-100 overflow-hidden" ref={ref}>
      {/* Floating CanSat SVG */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-0 opacity-20 pointer-events-none select-none animate-float-slow">
        {/* Replace with a real SVG if available */}
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full opacity-30"
            style={{ 
              left: `${particle.x}%`, 
              top: `${particle.y}%` 
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Fueling dreams for the stars — what drives Learnica Academy"
            center
            className="text-gray-800"
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto mt-24 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Mission Card */}
          <motion.div
            className="group relative scale-100 hover:scale-105 transition-transform duration-500"
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('mission')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-transparent overflow-hidden transition-all duration-500 hover:shadow-blue-500/30 hover:border-blue-400/60 hover:ring-4 hover:ring-blue-200/40">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: hoveredCard === 'mission' 
                    ? 'linear-gradient(120deg, #3b82f6, #8b5cf6, #06b6d4, #fff, #3b82f6)' : 'transparent',
                  padding: '3px'
                }}
                animate={{
                  backgroundPosition: hoveredCard === 'mission' ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-2xl" />
              </motion.div>
              <div className="relative z-10">
                <div className="p-10 pt-20">
                  {/* Large Floating Icon */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <Target className="text-white h-12 w-12" />
                  </motion.div>
                  {/* Sparkle Effects */}
                  <motion.div
                    className="absolute top-6 left-6"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="text-blue-400 h-10 w-10" />
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg animate-float">
                      <Rocket className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
                      Our Mission
                    </h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-700 leading-relaxed text-xl mb-8 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    To inspire innovation in aerospace engineering through hands-on satellite design, collaboration, and real-world competition—empowering the next generation of space technology pioneers at UIU.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Vision Card */}
          <motion.div
            className="group relative scale-100 hover:scale-105 transition-transform duration-500"
            variants={cardVariants}
            onHoverStart={() => setHoveredCard('vision')}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-transparent overflow-hidden transition-all duration-500 hover:shadow-emerald-500/30 hover:border-emerald-400/60 hover:ring-4 hover:ring-emerald-200/40">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: hoveredCard === 'vision' 
                    ? 'linear-gradient(120deg, #10b981, #06b6d4, #3b82f6, #fff, #10b981)' : 'transparent',
                  padding: '3px'
                }}
                animate={{
                  backgroundPosition: hoveredCard === 'vision' ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-2xl" />
              </motion.div>
              <div className="relative z-10">
                <div className="p-10 pt-20">
                  {/* Large Floating Icon */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/40 animate-float"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <Eye className="text-white h-12 w-12" />
                  </motion.div>
                  {/* Sparkle Effects */}
                  <motion.div
                    className="absolute top-6 left-6"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Sparkles className="text-emerald-400 h-10 w-10" />
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg animate-float">
                      <Eye className="text-white h-7 w-7" />
                    </div>
                    <h3 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent tracking-tight">
                      Our Vision
                    </h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-700 leading-relaxed text-xl mb-8 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    To represent UIU on the global stage by excelling in the NASA-sponsored CanSat Competition, nurturing a culture of engineering excellence, teamwork, and breakthrough innovation in aerospace systems.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}