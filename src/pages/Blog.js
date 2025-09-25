import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Mail, Calendar, User, Menu } from 'lucide-react';
import NavBar from '../components/Navbar/NavBar';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "Curating the Extraordinary: Essential Planning Tips for Your Luxury Wedding Experience✨",
      content: `
        2K Event has proudly orchestrated the most memorable and extravagant weddings in Dubai. Our signature events showcase meticulous attention to detail and an unwavering commitment to excellence, transforming ordinary celebrations into extraordinary experiences.

        Timing is perhaps the most valuable currency in luxury wedding planning.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562517/VOGUE_uhw2cb.png",
      imageWidth: 727,
      imageHeight: 909,
      author: "Elizabeth Montgomery",
      date: "February 18, 2025",
      tags: ["Luxury Planning", "Wedding Design", "Elite Venues"]
    },
    {
      title: "✨ Raving Reviews from Our Happy Clients ✨",
      content: `
        Nothing speaks louder than the joy of our clients! 💕 From breathtaking designs to unforgettable experiences, your words inspire us to keep crafting magic. ✨
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562515/Lebanese_Weddings_Maaloul_u4gwwv.png",
      author: "Elite Weddings",
      date: "March 11, 2025",
      tags: ["Client Love", "5-Star Reviews", "Luxury Experience"]
    },
    {
      title: "Selected one of the best 15 breathtaking venues for a fairytale wedding in the UAE",
      content: `
        A Fairytale Wedding with 2K Event Step into a world of elegance and romance with 2K Event at one of the UAE's most breathtaking venues, where every detail is crafted for a magical and unforgettable celebration.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741733526/blo_au1wpu.jpg",
      author: "Jonathan Winters",
      date: "February 10, 2025",
      tags: ["Décor Trends", "Luxury Design", "Avant-garde Aesthetics"]
    },
    {
      title: "Selected one of the best 15 breathtaking venues for a fairytale wedding in the UAE",
      content: `
        A Fairytale Wedding with 2K Event Step into a world of elegance and romance with 2K Event at one of the UAE's most breathtaking venues, where every detail is crafted for a magical and unforgettable celebration.
      `,
      image: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741734040/a_xsaxuj.jpg",
      author: "Jonathan Winters",
      imageWidth: 527,
      imageHeight: 609,
      date: "February 10, 2025",
      tags: ["Décor Trends", "Luxury Design", "Avant-garde Aesthetics"]
    },
  ];

  const truncateContent = (content) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');  // Split the content by lines
    const truncatedLines = lines.slice(0, 4);  // Limit to the first 4 lines
    return truncatedLines.join('\n');  // Join them back as a single string
  };

  // Function to toggle expanded state for a post
  const toggleExpand = (index) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <NavBar />

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 w-48 rounded-xl bg-white/10 backdrop-blur-xl p-4"
            >
              {['hero', 'blog', 'newsletter', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-white/20 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30"></div>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611439/pic4_uq7vvg.jpg)' }}
            ></div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 sm:mb-8"
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-purple-400" />
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight mb-6 sm:mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-blue-400">
            <span className="block">Luxury Wedding Design</span>
            <span className="block italic mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">For Discerning Couples</span>
          </h1>

          <motion.div 
            className="w-16 sm:w-24 h-px bg-purple-400 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-16 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold mb-12 sm:mb-20 text-center bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Curated Insights & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: `${post.imageWidth || 4}/${post.imageHeight || 3}` }}>
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-6">
                    {expandedPosts[index] ? post.content : truncateContent(post.content)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 sm:p-12 text-center border border-white/10"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Elevate Your Wedding Experience
            </motion.h2>
            <motion.div 
              className="w-24 h-0.5 bg-purple-400 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            />
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Our team of distinguished wedding planners and design specialists curate exceptional celebrations for discerning couples.
              With an uncompromising commitment to excellence and discretion, we transform your vision into an immersive experience
              that exceeds expectations in every detail.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium uppercase tracking-wider hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-300 border border-white/10 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-[-90deg]" />
      </motion.button>
    </div>
  );
};

export default Blog;