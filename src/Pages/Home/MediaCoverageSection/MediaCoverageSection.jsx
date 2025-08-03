import Modal from "react-modal"; // at the top
import { motion, useInView } from "framer-motion";
import {
    Play,
    ExternalLink,
    Calendar,
    Eye,
    Newspaper,
    Video,
    ChevronRight,
    Sparkles,
    Globe
} from "lucide-react";
import { useRef, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

export default function MediaCoverageSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredItem, setHoveredItem] = useState(null);

    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Sample data - replace with your actual media coverage
    const youtubeNews = [
        {
            id: 1,
            title: "Learnica Academy Team Prepares for NASA Competition 2026",
            channel: "TechNews Bangladesh",
            date: "January 15, 2025",
            views: "12.5K",
            thumbnail: "/api/placeholder/400/225",
            videoUrl: "https://www.youtube.com/watch?v=IVJd8PnlB-s",
            duration: "5:32"
        },
        {
            id: 2,
            title: "Student Innovation: Building Satellites at UIU",
            channel: "Campus Today",
            date: "December 28, 2024",
            views: "8.2K",
            thumbnail: "/api/placeholder/400/225",
            videoUrl: "https://youtube.com/watch?v=example2",
            duration: "7:45"
        }
    ];

    const newsArticles = [
        {
            id: 1,
            title: "UIU Students Set to Compete in International CanSat Competition",
            publication: "The Daily Star",
            date: "January 20, 2025",
            excerpt: "A team of engineering students from United International University is preparing to represent Bangladesh in the prestigious NASA CanSat Competition...",
            link: "https://thedailystar.net/example-article-1",
            image: "/api/placeholder/300/200"
        },
        {
            id: 2,
            title: "Young Engineers Dream Big: UIU's Journey to Space Technology",
            publication: "Prothom Alo",
            date: "January 10, 2025",
            excerpt: "Innovation meets ambition as UIU students work tirelessly to design and build their CanSat for the upcoming international competition...",
            link: "https://prothomalo.com/example-article-2",
            image: "/api/placeholder/300/200"
        },
        {
            id: 3,
            title: "Bangladesh in Space: UIU Team's Mission to the Stars",
            publication: "New Age",
            date: "December 15, 2024",
            excerpt: "The Learnica Academy team represents the future of aerospace engineering in Bangladesh, showcasing local talent on the global stage...",
            link: "https://newagebd.net/example-article-3",
            image: "/api/placeholder/300/200"
        }
    ];

    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: i * 0.3,
        duration: 4 + Math.random() * 3,
        x: Math.random() * 100,
        y: Math.random() * 100
    }));

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-200 overflow-hidden" ref={ref}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-red-100/30 to-pink-100/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />



                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Video Modal"
                    className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 z-[999]"
                    overlayClassName="fixed inset-0 bg-black/60 z-[998]"
                >
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={currentVideoUrl.replace("watch?v=", "embed/") + "?autoplay=1"}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 rounded-full hover:bg-white transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </Modal>




                <motion.div
                    className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.3, 0.6]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4.5
                    }}
                />

                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-gradient-to-r from-red-300 to-blue-300 rounded-full opacity-20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [0.5, 1.2, 0.5]
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
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle
                        title="Media Coverage"
                        subtitle="Our journey featured across news platforms and social media"
                        center
                        className="text-gray-800"
                    />
                </motion.div>

                <motion.div
                    className="max-w-7xl mx-auto mt-20 px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* YouTube News Section */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Video className="text-white h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                                Video Coverage
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-red-300 to-transparent" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {youtubeNews.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    className="group relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-red-500/15 hover:border-red-300/30 hover:shadow-2xl"
                                    onHoverStart={() => setHoveredItem(`video-${video.id}`)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {/* Video Thumbnail */}
                                    <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                        {/* Placeholder thumbnail */}
                                        <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                                            <Play className="text-white h-16 w-16 opacity-80" />
                                        </div>

                                        {/* Play Button Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                                        >
                                            <motion.div
                                                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Play className="text-red-600 h-8 w-8 ml-1" fill="currentColor" />
                                            </motion.div>
                                        </motion.div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                                            {video.duration}
                                        </div>

                                        {/* Sparkle Effect */}
                                        <motion.div
                                            className="absolute top-2 left-2"
                                            animate={{
                                                rotate: [0, 360],
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Sparkles className="text-white h-5 w-5" />
                                        </motion.div>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                                            {video.title}
                                        </h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Globe className="h-4 w-4" />
                                                {video.channel}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {video.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye className="h-4 w-4" />
                                                {video.views}
                                            </span>
                                        </div>


                                        <a
                                            onClick={() => {
                                                setCurrentVideoUrl(video.videoUrl);
                                                setIsModalOpen(true);
                                            }}
                                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium group/link cursor-pointer"
                                        >
                                            <Play className="h-4 w-4" />
                                            Watch Video
                                            <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                        </a>


                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* News Articles Section */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Newspaper className="text-white h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                Press Coverage
                            </h3>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-300 to-transparent" />
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {newsArticles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    className="group relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-blue-500/15 hover:border-blue-300/30 hover:shadow-2xl"
                                    onHoverStart={() => setHoveredItem(`article-${article.id}`)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                >
                                    {/* Article Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                            <Newspaper className="text-white h-12 w-12 opacity-80" />
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <span className="font-medium text-blue-600">{article.publication}</span>
                                            <span>•</span>
                                            <span>{article.date}</span>
                                        </div>

                                        <h4 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                            {article.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <a
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group/link"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Read Full Article
                                            <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Decorative Element */}
                <motion.div
                    className="flex justify-center mt-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-500 rounded-full" />
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Sparkles className="text-white h-4 w-4" />
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}