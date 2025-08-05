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
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.003 3.2c-7.036 0-12.8 5.673-12.8 12.634 0 2.225.61 4.397 1.765 6.303L3.2 28.8l6.827-1.779a13.038 13.038 0 0 0 6.003 1.515h.001c7.036 0 12.8-5.674 12.8-12.636 0-3.396-1.325-6.591-3.731-8.974A12.953 12.953 0 0 0 16.003 3.2zm-.002 23.135h-.001a10.663 10.663 0 0 1-5.437-1.496l-.389-.231-4.052 1.053 1.081-3.946-.254-.404a10.41 10.41 0 0 1-1.654-5.677c0-5.805 4.751-10.527 10.6-10.527a10.532 10.532 0 0 1 7.513 3.13 10.367 10.367 0 0 1 3.093 7.443c0 5.804-4.751 10.555-10.6 10.555zm5.869-7.91c-.324-.162-1.922-.95-2.22-1.058-.297-.108-.512-.162-.727.162s-.835 1.058-1.024 1.28c-.189.216-.378.243-.702.081-.919-.432-1.7-1.134-2.376-2.027-.18-.243-.18-.405-.014-.594.162-.189.378-.432.54-.648.18-.216.243-.378.378-.648.135-.27.068-.51-.027-.72-.081-.216-.702-1.696-.962-2.322-.243-.567-.491-.49-.675-.499h-.578c-.162 0-.423.054-.648.27-.216.216-.851.83-.851 2.027s.87 2.348.99 2.514c.121.162 1.716 2.713 4.168 3.801.583.252 1.037.405 1.392.54.585.189 1.117.162 1.537.099.468-.07 1.435-.586 1.639-1.151.203-.567.203-1.053.143-1.151-.054-.094-.189-.149-.405-.27z" />
    </svg>
);


const YouTubeIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.615 3.184C18.403 2.89 12 2.89 12 2.89s-6.403 0-7.615.295A3.542 3.542 0 0 0 1.7 5.481C1.41 6.69 1.41 12 1.41 12s0 5.31.29 6.519a3.542 3.542 0 0 0 2.685 2.297c1.212.294 7.615.294 7.615.294s6.403 0 7.615-.294a3.542 3.542 0 0 0 2.685-2.297c.29-1.209.29-6.519.29-6.519s0-5.31-.29-6.519a3.542 3.542 0 0 0-2.685-2.297ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z" />
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