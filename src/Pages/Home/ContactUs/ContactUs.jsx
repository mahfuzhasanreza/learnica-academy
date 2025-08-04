import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animated Background Component
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

// Icons
const LocationIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);

const WhatsAppIcon = ({ className = "" }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            fillRule="evenodd"
            clipRule="evenodd"
        />
    </svg>
);

const PhoneIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
);

const EmailIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const ClockIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="m12.5 7-1 0 0 6 5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
);

const SendIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

// Contact Info Card Component
const ContactInfoCard = ({ icon: Icon, title, info, gradient, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{
            scale: 1.05,
            y: -5
        }}
        className="group cursor-pointer"
    >
        <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden h-full shadow-2xl">
            {/* Glowing border effect */}
            <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-15`}
                transition={{ duration: 0.3 }}
            />

            {/* Inner glow */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {title}
                </h3>

                {/* Info */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {info}
                </p>
            </div>
        </div>
    </motion.div>
);

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl"
        >
            {/* Background effects */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />

            <div className="relative z-10">
                <div className="mb-8">
                    <motion.h3
                        className="text-4xl font-bold mb-3"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{ backgroundPosition: '100% 50%' }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                        }}
                        style={{
                            background: 'linear-gradient(90deg, #a78bfa, #818cf8, #a78bfa)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Send Message
                    </motion.h3>
                    <p className="text-gray-400 text-lg">
                        Have a question or want to get in touch? We'd love to hear from you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-3">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-sm transition-all duration-300"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-3">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-sm transition-all duration-300"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-3">
                            Subject *
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-sm transition-all duration-300"
                            placeholder="What's this about?"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-3">
                            Message *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 backdrop-blur-sm transition-all duration-300 resize-none"
                            placeholder="Tell us more about your inquiry..."
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl relative overflow-hidden backdrop-blur-sm border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{
                            scale: isSubmitting ? 1 : 1.02,
                            boxShadow: isSubmitting ? "0 0 0px transparent" : "0 0 30px rgba(99, 102, 241, 0.4)"
                        }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                            initial={{ x: '-100%' }}
                            whileHover={isSubmitting ? {} : { x: '0%' }}
                            transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isSubmitting ? (
                                <>
                                    <motion.div
                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <SendIcon className="w-5 h-5" />
                                    Send Message
                                </>
                            )}
                        </span>
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

// Main Contact Us Component
const ContactUs = () => {
    const contactInfo = [
        {
            icon: PhoneIcon,
            title: "Call Us",
            info: "+1 (555) 123-4567\nMon - Fri: 9AM - 6PM",
            gradient: "from-pink-500 to-rose-500",
            delay: 0.2
        },
        {
            icon: EmailIcon,
            title: "Email Us",
            info: "hello@learnica.com\nsupport@learnica.com",
            gradient: "from-red-500 to-red-400",
            delay: 0.3
        },
        {
            icon: WhatsAppIcon,
            title: "WhatsApp Us",
            info: "+1 (555) 987-6543\nQuick responses!",
            gradient: "from-green-500 to-emerald-500",
            delay: 0.4
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
        <section className="relative py-24 overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    {/* <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-bold mb-8 shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              💬 Get In Touch
            </motion.span>
          </motion.div> */}

                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
                    >
                        Contact{" "}
                        <motion.span
                            className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                textShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
                            }}
                        >
                            Us
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Ready to start your learning journey? Have questions about our courses?
                        We're here to help you succeed every step of the way.
                    </motion.p>
                </motion.div>



                {/* Contact Form and Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-rows-1 gap-8 ">
                        {contactInfo.map((info, index) => (
                            <ContactInfoCard
                                key={index}
                                icon={info.icon}
                                title={info.title}
                                info={info.info}
                                gradient={info.gradient}
                                delay={info.delay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;