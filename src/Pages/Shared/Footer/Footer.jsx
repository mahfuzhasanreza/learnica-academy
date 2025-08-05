// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Icons
const LogoIcon = () => (
    <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

const FacebookIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
    </svg>
);

const WhatsAppIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
);

const YouTubeIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.015 3.015 0 0 0 2.122-2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const GmailIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Instructors', path: '/Instructors' },
        { name: 'Contact', path: '/contact' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Refund Policy', path: '/refund' },
    ];

    const socialLinks = [
        { name: 'Facebook', Icon: FacebookIcon, color: 'hover:text-blue-400', href: 'https://facebook.com' },
        { name: 'WhatsApp', Icon: WhatsAppIcon, color: 'hover:text-green-400', href: 'https://wa.me/yournumber' },
        { name: 'YouTube', Icon: YouTubeIcon, color: 'hover:text-red-400', href: 'https://youtube.com' },
        { name: 'Gmail', Icon: GmailIcon, color: 'hover:text-orange-400', href: 'mailto:hello@learnica.com' },
    ];

    return (
        <footer className="w-full relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
            

            {/* Main Content */}
            <div className="relative z-10 w-11/12 lg:w-10/12 mx-auto pt-20 pb-8">
                <div className="flex justify-between">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-3/10 mx-auto  lg:col-span-1 space-y-6"
                    >
                        <motion.div 
                            className="flex items-center gap-3 group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <LogoIcon />
                            </motion.div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Learnica
                            </span>
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Empowering learners worldwide with premium online courses in tech, design, and business. 
                            Join thousands of students transforming their careers.
                        </p>
                        <motion.div 
                            className="flex items-center text-indigo-400 font-semibold text-sm group cursor-pointer"
                            whileHover={{ x: 5 }}
                        >
                            <span>Explore Courses</span>
                            <ArrowIcon />
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className=" mx-auto space-y-6"
                    >
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Quick Links
                            <motion.div 
                                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: "120%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 8 }}
                                >
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-white hover:text-indigo-300 transition-all duration-300 block relative group"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-md -z-10"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            style={{ originX: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className=" mx-auto  space-y-6"
                    >
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Legal
                            <motion.div 
                                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 8 }}
                                >
                                    <a
                                        href={link.path}
                                        className="text-gray-400 hover:text-white hover:text-purple-300 transition-all duration-300 block relative group"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md -z-10"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            style={{ originX: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className=" mx-auto space-y-6"
                    >
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Get in Touch
                            <motion.div 
                                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-indigo-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </h3>
                        
                        <div className="w-fit grid grid-cols-4 gap-2">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target={social.name === 'Gmail' ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25 group`}
                                    whileHover={{ 
                                        y: -5,
                                        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                    aria-label={social.name}
                                >
                                    <social.Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Divider */}
                <motion.div
                    className="my-8 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-indigo-400/50 via-purple-400/50 via-pink-400/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    />
                    <motion.div
                        className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    />
                </motion.div>

                {/* Enhanced Copyright */}
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <p className="text-gray-400 text-sm">
                        © 2025 Learnica Academy. All rights reserved.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
        </footer>
    );
};

export default Footer;