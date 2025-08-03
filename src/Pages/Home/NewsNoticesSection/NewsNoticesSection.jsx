import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const newsData = [
  {
    id: 1,
    type: "News",
    title: "Learnica Academy Selected for National Competition",
    date: "July 20, 2025",
    description: "Our CanSat team has been selected to represent UIU in the National CanSat Launch Challenge 2025...",
    image: "https://via.placeholder.com/400x200.png?text=CanSat+Launch",
    link: "#",
  },
  {
    id: 2,
    type: "Notice",
    title: "Team Meeting Scheduled for Sunday",
    date: "July 18, 2025",
    description: "All sub-teams are requested to attend the strategy meeting on Sunday at 4 PM in Room 502...",
    image: "https://via.placeholder.com/400x200.png?text=Meeting+Notice",
    link: "#",
  },
  {
    id: 3,
    type: "News",
    title: "Mission Plan Phase 1 Completed",
    date: "July 15, 2025",
    description: "The planning and simulation for Phase 1 have been successfully completed ahead of schedule...",
    image: "https://via.placeholder.com/400x200.png?text=Mission+Plan",
    link: "#",
  },
];

export default function NewsNoticesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="news-notices">
      <SectionTitle
        title="News & Notices"
        subtitle="Get the latest updates from the Learnica Academy team"
        center={true}
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                <span
                  className={`font-medium px-2 py-1 rounded-full ${
                    item.type === "News"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.type}
                </span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-block mt-4 text-sm text-purple-600 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
