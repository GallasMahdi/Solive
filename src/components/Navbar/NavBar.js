import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Globe } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../images/LogoColor.svg";

const NavBar = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);

  // Scroll detection for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items for easier animation mapping
  const navItems = [
    { id: 'home', en: 'Home', fr: 'Accueil' },
    { id: 'story', en: 'Story', fr: 'Histoire' },
    { id: 'products', en: 'Products', fr: 'Produits' },
    { id: 'contact', en: 'Contact', fr: 'Contact' }
  ];

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-30 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Animated top border */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-800"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="flex items-center h-20 px-6 max-w-7xl mx-auto">
        {/* Left Navigation with staggered animation */}
        <motion.div 
          className="hidden lg:flex flex-1 justify-end space-x-12"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {leftItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <HashLink
                className="relative text-gray-700 hover:text-green-700 text-base font-medium transition-all duration-300 group"
                smooth
                to={`/#${item.id}`}
                onClick={() => setActiveSection(item.id)}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "en" ? item.en : item.fr}
                </motion.span>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-green-50 rounded-md -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </HashLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Center Logo with simple pop-up animation */}
        <motion.div 
          className="flex justify-center flex-1 relative -my-12"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <HashLink smooth to="/#home">
            <motion.img
              src={logo}
              alt="Solivera Logo"
              className="h-40 w-auto object-contain cursor-pointer relative z-10"
              initial={false}
              animate={false}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            />
          </HashLink>
        </motion.div>

        <motion.div 
          className="hidden lg:flex flex-1 justify-start space-x-6 items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {rightItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <HashLink
                className="relative text-gray-700 hover:text-green-700 text-base font-medium transition-all duration-300 group"
                smooth
                to={`/#${item.id}`}
                onClick={() => setActiveSection(item.id)}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "en" ? item.en : item.fr}
                </motion.span>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-green-50 rounded-md -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </HashLink>
            </motion.div>
          ))}

          {/* Enhanced Language Selector */}
          <motion.div 
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={toggleLangMenu}
              className="relative text-gray-700 hover:text-green-700 p-3 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.div
                animate={{ rotate: langMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Globe size={20} strokeWidth={1.5} className="relative z-10" />
              </motion.div>
              
              {/* Notification dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.ul
                  className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {[
                    { code: 'en', name: 'English', flag: '🇺🇸' },
                    { code: 'fr', name: 'Français', flag: '🇫🇷' }
                  ].map((lang, index) => (
                    <motion.li
                      key={lang.code}
                      className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all text-sm flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Enhanced Mobile Menu Button */}
        <motion.div 
          className="lg:hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            onClick={toggleMenu} 
            className="relative p-3 text-gray-700 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            <motion.svg
              className="h-6 w-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.path
                    key="close"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.g key="menu">
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0 }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 12h16"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 18h16"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

<AnimatePresence>
  {isOpen && (
    <motion.div
      className="absolute top-full left-0 w-full bg-white shadow-lg py-6 lg:hidden"
      style={{ zIndex: 9999 }} // Force high z-index
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="space-y-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <a
              href={`#${item.id}`}
              className="block text-center py-3 mx-4 text-gray-700 hover:text-green-700 font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Clicking ${item.id}`); // Debug log
                
                // Close mobile menu
                setIsOpen(false);
                setActiveSection(item.id);
                setLangMenuOpen(false);
                
                // Wait for menu to close, then scroll
                setTimeout(() => {
                  const element = document.getElementById(item.id);
                  console.log('Found element:', element); // Debug log
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start' 
                    });
                  }
                }, 300);
              }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en" ? item.en : item.fr}
              </motion.span>
            </a>
          </motion.div>
        ))}

        {/* Mobile Language Selector */}
        <motion.div 
          className="flex justify-center pt-4 border-t border-gray-200 mx-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="flex space-x-2">
            {[
              { code: 'en', name: 'EN', flag: '🇺🇸' },
              { code: 'fr', name: 'FR', flag: '🇫🇷' }
            ].map((lang) => (
              <motion.button
                key={lang.code}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  language === lang.code 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  changeLanguage(lang.code);
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;