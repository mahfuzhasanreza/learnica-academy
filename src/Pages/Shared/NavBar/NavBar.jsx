import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, ShoppingCart, Bell } from "lucide-react";
import learnicaLogo from '../../../assets/logo/learnica-logo.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Courses', 
      href: '#courses',
      dropdown: [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Data Science', href: '#data-science' },
        { name: 'Mobile Apps', href: '#mobile' },
        { name: 'UI/UX Design', href: '#design' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">L</span>
            </div> */}
            {/* <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Learnica
            </span> */}
            <img src={learnicaLogo} alt="Learnica Logo" className="hidden lg:block w-44" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ 
                        opacity: activeDropdown === index ? 1 : 0,
                        y: activeDropdown === index ? 0 : 10,
                        scale: activeDropdown === index ? 1 : 0.95
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl ${
                        activeDropdown === index ? 'pointer-events-auto' : 'pointer-events-none'
                      }`}
                    >
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                3
              </span>
            </motion.button>

            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-white border border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Sign In
            </motion.button>

            {/* Get Started Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 font-medium"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: activeDropdown === index ? 'auto' : 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-8 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3 px-4">
              <button className="w-full px-4 py-3 text-white border border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 font-medium">
                Sign In
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Close dropdown when clicking outside */}
      {activeDropdown !== null && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;