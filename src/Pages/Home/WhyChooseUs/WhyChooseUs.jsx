
import Lottie from "lottie-react";
import circleText from "../../../assets/lottie/CircleText.json";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Industry-Aligned Curriculum",
    description:
      "Courses crafted to meet real-world demands, ensuring you stay ahead in your career.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "Certified Instructors",
    description:
      "Learn from experienced professionals dedicated to your success.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    title: "Flexible Learning",
    description:
      "Access your courses anytime, anywhere — study at your own pace.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Our team is always ready to help you, anytime you need assistance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 md:px-20 text-white"
    >
      {/* Subtle animated background circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-indigo-700 opacity-20 filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-pink-700 opacity-15 filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Section header */}
      <motion.div
      className={`mb-20 text-center max-w-3xl mx-auto`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <h2 className="text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          Why
          <span className="relative inline-block mx-2">
            <span className="z-10 text-white relative">Choose</span>
            <Lottie
              animationData={circleText}
              loop={true}
              className="absolute top-1/2 left-1/2 w-48 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </span>
          Us
        </h2>
      </div>
        <motion.p
          className="text-gray-300 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Choose Us
        </motion.p>
    </motion.div>

      {/* Features grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 bg-opacity-40 rounded-xl p-6 cursor-pointer select-none"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="mb-5">{icon}</div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
