import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, icon, className = "" }) => {
  return (
    <motion.div
      className={`text-center mb-12 max-w-3xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center gap-4 mb-3">
        {icon && (
          <motion.div
            className="text-indigo-500"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            {icon}
          </motion.div>
        )}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          {title}
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

      {/* Animated Underline */}
      <motion.div
        className="h-1 rounded-full mx-auto mt-6"
        initial={{ width: 0, opacity: 0.5 }}
        animate={{ width: "6rem", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          background:
            "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)"
        }}
      />
    </motion.div>
  );
};

export default SectionTitle;
