import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`mt-0 ${center ? "text-center" : "text-left"}`}
    >
      <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-600 to-purple-600">
        {title}
        <span className="block h-1 w-16 mt-2 mx-auto bg-gradient-to-r from-green-500 via-yellow-500 to-purple-500 rounded-full animate-pulse" />
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray-700 text-base sm:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
