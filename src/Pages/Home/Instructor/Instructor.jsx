import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

// Social Media Icons
const LinkedInIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GitHubIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EmailIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// Badge Component for specializations
const SpecializationBadge = ({ text, gradient }) => (
  <motion.span
    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${gradient} text-white`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    {text}
  </motion.span>
);

// Social Links Component
const SocialLinks = ({ socialLinks, isVisible }) => (
  <motion.div 
    className="flex gap-3 justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: isVisible ? 1 : 0, 
      y: isVisible ? 0 : 20 
    }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {socialLinks.map((social, index) => {
      const IconComponent = {
        linkedin: LinkedInIcon,
        facebook: FacebookIcon,
        github: GitHubIcon,
        email: EmailIcon,
      }[social.platform];

      return (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${social.bgColor} ${social.hoverColor}`}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.8 
          }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <IconComponent className="w-4 h-4 text-white" />
        </motion.a>
      );
    })}
  </motion.div>
);

// Individual Mentor Card Component
const MentorCard = ({ mentor, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group cursor-pointer max-w-md mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-10 border border-white/10 overflow-hidden h-full"
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)
              `,
            }}
          />
        </div>


        {/* Animated Background */}
        {/* <AnimatedBackground /> */}

        {/* Glowing Border Effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${mentor.accentGradient} opacity-0`}
          animate={{
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 text-center">
          {/* Profile Image - Extra Large */}
          <div className="relative mb-8 mx-auto w-48 h-48">
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-6 border-white/20"
              animate={{
                borderColor: isHovered ? mentor.accentColor : 'rgba(255, 255, 255, 0.2)',
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            
            {/* Pulse Ring */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${mentor.accentGradient}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Status Indicator */}
            {/* <motion.div
              className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </motion.div> */}
          </div>

          {/* Name and Title */}
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            animate={{
              color: isHovered ? '#ffffff' : '#f3f4f6',
            }}
            transition={{ duration: 0.3 }}
          >
            {mentor.name}
          </motion.h3>

          <motion.p
            className="text-base mb-4"
            animate={{
              color: isHovered ? mentor.accentColor : '#9ca3af',
            }}
            transition={{ duration: 0.3 }}
          >
            {mentor.title}
          </motion.p>

          {/* Specialization Badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {mentor.specializations.map((spec, idx) => (
              <SpecializationBadge 
                key={idx} 
                text={spec} 
                gradient={mentor.badgeGradient}
              />
            ))}
          </div>

          {/* Bio */}
          <motion.p
            className="text-gray-300 text-sm leading-relaxed mb-6"
            animate={{
              color: isHovered ? '#d1d5db' : '#9ca3af',
            }}
            transition={{ duration: 0.3 }}
          >
            {mentor.bio}
          </motion.p>

          {/* Social Links - Only show on hover */}
          <SocialLinks socialLinks={mentor.socialLinks} isVisible={isHovered} />
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${mentor.accentGradient} rounded-full`}
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -40, -80],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// Main Mentors Section Component
const Instructor = () => {
  // Mock data - showing only 3 mentors for 1 row
  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      title: "Senior Software Engineer & Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      specializations: ["JavaScript", "React", "Node.js"],
      bio: "10+ years of industry experience at top tech companies. Passionate about teaching modern web development and helping students achieve their career goals.",
      accentColor: "#3b82f6",
      accentGradient: "from-blue-500 to-cyan-500",
      badgeGradient: "from-blue-500 to-blue-600",
      socialLinks: [
        { platform: "linkedin", url: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
        { platform: "facebook", url: "#", bgColor: "bg-blue-700", hoverColor: "hover:bg-blue-800" },
        { platform: "github", url: "#", bgColor: "bg-gray-800", hoverColor: "hover:bg-gray-900" },
        { platform: "email", url: "mailto:sarah@learnica.com", bgColor: "bg-red-500", hoverColor: "hover:bg-red-600" }
      ]
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Data Science & ML Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specializations: ["Python", "Machine Learning", "Data Analysis"],
      bio: "PhD in Computer Science with expertise in AI/ML. Published researcher and industry consultant with a passion for making complex concepts accessible.",
      accentColor: "#10b981",
      accentGradient: "from-green-500 to-teal-500",
      badgeGradient: "from-green-500 to-green-600",
      socialLinks: [
        { platform: "linkedin", url: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
        { platform: "facebook", url: "#", bgColor: "bg-blue-700", hoverColor: "hover:bg-blue-800" },
        { platform: "github", url: "#", bgColor: "bg-gray-800", hoverColor: "hover:bg-gray-900" },
        { platform: "email", url: "mailto:michael@learnica.com", bgColor: "bg-red-500", hoverColor: "hover:bg-red-600" }
      ]
    },
    {
      id: 3,
      name: "Fatima Rahman",
      title: "Mobile App Development Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specializations: ["Flutter", "React Native", "iOS/Android"],
      bio: "Lead mobile developer with 8+ years building scalable apps. Mentor to hundreds of developers worldwide with a focus on practical, real-world solutions.",
      accentColor: "#f59e0b",
      accentGradient: "from-orange-500 to-yellow-500",
      badgeGradient: "from-orange-500 to-orange-600",
      socialLinks: [
        { platform: "linkedin", url: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
        { platform: "facebook", url: "#", bgColor: "bg-blue-700", hoverColor: "hover:bg-blue-800" },
        { platform: "github", url: "#", bgColor: "bg-gray-800", hoverColor: "hover:bg-gray-900" },
        { platform: "email", url: "mailto:fatima@learnica.com", bgColor: "bg-red-500", hoverColor: "hover:bg-red-600" }
      ]
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
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

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
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              👨‍🏫 Meet Our Team
            </motion.span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our Expert{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Mentors & Instructors
            </motion.span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Learn from industry professionals who bring real-world experience and passion for teaching. 
            Our mentors are here to guide you every step of the way.
          </motion.p>
        </motion.div>

        {/* Mentors Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Learn from the Best?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join thousands of students who have transformed their careers with guidance from our expert mentors. 
              Get personalized attention, industry insights, and the support you need to succeed.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
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
                Book 1-on-1 Session
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;