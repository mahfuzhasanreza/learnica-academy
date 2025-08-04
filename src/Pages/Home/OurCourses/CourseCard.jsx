import { motion } from "framer-motion";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const finalPrice = course.price - (course.price * course.discount) / 100;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1f1f47] to-[#111827] rounded-2xl p-[2px] shadow-lg"
    >
      <div className="bg-gray-900 rounded-2xl h-full p-6 flex flex-col justify-between text-white">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold mb-1">{course.name}</h3>
          <p className="text-sm text-indigo-400 mb-3">{course.code}</p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <p><span className="text-gray-400">👨‍🏫 Mentor:</span> {course.mentor}</p>
          <p><span className="text-gray-400">📅 Starting:</span> {course.startDate}</p>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="text-sm text-gray-400 line-through">৳{course.price}</p>
          <p className="text-2xl font-extrabold text-green-400">
            ৳{finalPrice}
            <span className="text-sm text-pink-400 font-semibold ml-2">
              ({course.discount}% off)
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between gap-3">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
            <FaShoppingCart /> Purchase
          </button>

          <button className="flex items-center gap-2 border border-gray-500 hover:border-indigo-400 px-4 py-2 rounded-xl text-sm font-medium transition text-white">
            See Details <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
