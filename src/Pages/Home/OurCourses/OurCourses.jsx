import CourseCard from "./CourseCard";

const courses = [
  {
    code: "WD101",
    name: "Web Development Bootcamp",
    mentor: "Jhanker Mahbub",
    startDate: "August 15, 2025",
    price: 5000,
    discount: 20,
  },
  // Add more courses...
];

const OurCourses = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
          Our Courses
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Explore our high-quality, expert-led courses to level up your skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default OurCourses;
