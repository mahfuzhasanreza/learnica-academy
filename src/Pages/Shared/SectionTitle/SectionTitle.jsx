import { motion } from "framer-motion";
import circleText from '../../../assets/lottie/CircleText.json'
import Lottie from "lottie-react";

const SectionTitle = ({ title, subtitle, icon, className = "" }) => {
  return (
    <motion.div
      className={`mb-20 text-center max-w-3xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <h2 className="text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          Why
          <span className="relative inline-block mx-2">
            <span className="z-10 text-white relative">Chose</span>
            <Lottie
              animationData={circleText}
              loop={true}
              className="absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </span>
          Us
        </h2>
      </div>

      {subtitle && (
        <motion.p
          className="text-gray-300 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
