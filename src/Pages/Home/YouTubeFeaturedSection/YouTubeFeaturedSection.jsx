import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// YouTube Logo Component
const YouTubeIcon = ({ className = "" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

// Bell Icon
const BellIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
);

// Users Icon
const UsersIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4H4zM10 18v-4h3v4h-3zM16 18v-4h3v4h-3zM4 12V8h3v4H4zM10 12V8h3v4h-3zM16 12V8h3v4h-3z" />
    </svg>
);

// Stats Counter Component
const StatsCounter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
            let startTime;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration, hasStarted]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

// Animated Text Component
const AnimatedText = () => {
    const words = ["Learn", "Excel", "Succeed"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <motion.span
            key={currentWordIndex}
            className=" bg-gradient-to-r from-red-400 via-red-500 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {words[currentWordIndex]}
        </motion.span>
    );
};

// Left Text Content Component
const LeftTextContent = () => {
    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Badge */}
            <motion.div
                className="inline-flex items-center gap-2 bg-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
            >
                <YouTubeIcon className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-semibold text-sm">YouTube Channel</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <AnimatedText /> with{" "}
                <br />
                <span className="text-gray-300">Expert Tutorials</span>
            </motion.h2>

            {/* Description */}
            <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
            >
                Join thousands of UIU students who are mastering their subjects through our comprehensive video tutorials, live Q&A sessions, and exam-focused content.
            </motion.p>

            {/* Feature List */}
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
            >
                {[
                    { icon: "🎓", text: "Expert-led tutorials for all UIU subjects" },
                    { icon: "📚", text: "Comprehensive exam preparation content" },
                    { icon: "🎯", text: "Interactive live sessions & Q&A" },
                    { icon: "⚡", text: "New content uploaded weekly" }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-2xl">{feature.icon}</div>
                        <span className="text-gray-300 text-lg">{feature.text}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold text-lg shadow-xl relative overflow-hidden group"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.3 }}
                    />
                    <YouTubeIcon className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Subscribe Now</span>
                </motion.button>

                <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all backdrop-blur-sm"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <UsersIcon className="w-5 h-5" />
                    <span>Watch Videos</span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

// Right YouTube Card Component
const YouTubeChannelCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const channelData = {
        name: "Learnica Academy",
        handle: "@learnicacademy",
        subscribers: 5,
        totalViews: 5000,
        totalVideos: 5,
        channelUrl: "https://youtube.com/@learnicacademy"
    };

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Main Card */}
            <motion.div
                className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border border-white/10 overflow-hidden"
                animate={{
                    y: isHovered ? -10 : 0,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)
              `,
                        }}
                    />
                </div>

                {/* Glowing Border Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 rounded-3xl"
                    animate={{
                        opacity: isHovered ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                    {/* Channel Header */}
                    <div className="flex items-start gap-6 mb-8">
                        {/* Channel Avatar */}
                        <motion.div
                            className="relative"
                            animate={{
                                scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                                <YouTubeIcon className="w-10 h-10 text-white" />
                            </div>

                            {/* Pulse Ring */}
                            <motion.div
                                className="absolute inset-0 bg-red-500/30 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Channel Info */}
                        <div className="flex-1">
                            <motion.h3
                                className="text-2xl font-bold text-white mb-1"
                                animate={{
                                    color: isHovered ? '#ffffff' : '#f3f4f6',
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {channelData.name}
                            </motion.h3>
                            <p className="text-gray-400 mb-2">{channelData.handle}</p>

                            {/* Verified Badge */}
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <span className="text-gray-400 text-sm">Education Channel</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">
                                <StatsCounter end={channelData.subscribers} suffix="+" />
                            </div>
                            <div className="text-gray-400 text-sm">Subscribers</div>
                        </div>

                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">
                                <StatsCounter end={Math.floor(channelData.totalViews / 1000)} suffix="K+" />
                            </div>
                            <div className="text-gray-400 text-sm">Views</div>
                        </div>

                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">
                                <StatsCounter end={channelData.totalVideos} suffix="+" />
                            </div>
                            <div className="text-gray-400 text-sm">Videos</div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Your go-to destination for UIU academic success. Expert tutorials, exam tips, and comprehensive course content.
                    </p>

                    {/* Subscribe Button */}
                    <motion.a
                        href={channelData.channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-600 transition-all duration-300 text-white rounded-full font-bold text-lg shadow-xl relative overflow-hidden group"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '0%' }}
                            transition={{ duration: 0.3 }}
                        />
                        <YouTubeIcon className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Subscribe Now</span>
                        {/* <BellIcon className="w-5 h-5 relative z-10" /> */}
                    </motion.a>
                </div>

                {/* Floating Particles */}
                {isHovered && (
                    <>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-red-500 rounded-full"
                                initial={{
                                    x: Math.random() * 400,
                                    y: Math.random() * 300,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: [0, -60, -120],
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

            {/* Glow Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10"
                animate={{
                    opacity: isHovered ? 0.8 : 0.3,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
};

// Main YouTube Featured Section
const YouTubeFeaturedSection = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated Background Gradients */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '100px 100px',
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Split Layout Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <LeftTextContent />

                    {/* Right Side - YouTube Channel Card */}
                    <YouTubeChannelCard />
                </div>
            </div>

            {/* Floating YouTube Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0.1 }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 180, 360],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 5,
                        }}
                        style={{
                            left: `${10 + i * 30}%`,
                            top: `${15 + i * 25}%`,
                        }}
                    >
                        <YouTubeIcon className="w-4 h-4 text-red-500/20" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default YouTubeFeaturedSection;