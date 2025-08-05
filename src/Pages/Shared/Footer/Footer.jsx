// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Icons
const LogoIcon = () => (
  <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
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

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Facebook', Icon: FacebookIcon, color: 'text-blue-500', href: 'https://facebook.com' },
    { name: 'WhatsApp', Icon: WhatsAppIcon, color: 'text-green-500', href: 'https://wa.me/yournumber' },
    { name: 'YouTube', Icon: YouTubeIcon, color: 'text-red-500', href: 'https://youtube.com' },
    { name: 'Gmail', Icon: GmailIcon, color: 'text-orange-500', href: 'mailto:hello@learnica.com' },
  ];

  return (
    <footer className="w-full relative bg-black overflow-hidden">
      {/* Animated Background (matches ContactUs) */}
      <div className=" absolute inset-0 overflow-hidden">
        {/* <motion.div
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
        /> */}
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
        {/* Floating Orb */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-10/12 mx-auto pt-16 pb-7">
        <div className="flex justify-around gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <LogoIcon />
              <span className="text-2xl font-bold text-white">Learnica</span>
            </div>
            <p className="w-96 text-gray-400 leading-relaxed">
              Empowering learners worldwide with premium online courses in tech, design, and business.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links (Right Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-white font-bold text-lg mb-6">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.name === 'Gmail' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={social.name}
                >
                  <social.Icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright Only */}
        <motion.p
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © 2025 Learnica Academy. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;