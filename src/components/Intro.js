import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import tree1 from "../images/tree1.jpg";
import tree2 from "../images/tree2.jpg";
import tree3 from "../images/tree3.jpg";

// Mock asset for demonstration
const Assest17 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNGE2NzQxIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjNmI4ZTVhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJjM2UyOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2JnKSIvPgo8L3N2Zz4=";

const galleryImages = [
  { src: tree1, alt: "Olive Tree 1" },
  { src: tree2, alt: "Olive Tree 2" },
  { src: tree3, alt: "Olive Tree 3" }
];

// Advanced text animation component
const AnimatedText = ({ text, className, delay = 0, animation = "fade" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = text.split(' ');
  const letters = text.split('');

  useEffect(() => {
    if (isInView && animation === "typewriter") {
      const timer = setTimeout(() => {
        if (currentIndex < letters.length) {
          setDisplayedText(prev => prev + letters[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }
      }, 30 + delay * 10);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex, letters, delay, animation]);

  if (animation === "typewriter") {
    return (
      <motion.div ref={ref} className={className}>
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block w-0.5 h-6 bg-white"
        />
      </motion.div>
    );
  }

  if (animation === "words") {
    return (
      <motion.div ref={ref} className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: delay + index * 0.1,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (animation === "letters") {
    return (
      <motion.div ref={ref} className={className}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.4, 
              delay: delay + index * 0.02,
              type: "spring",
              stiffness: 100
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Default fade animation
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

// Paragraph with staggered sentence animations
const AnimatedParagraph = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const sentences = children.split(/(?<=[.!?])\s+/);

  return (
    <motion.div ref={ref} className="mt-4 text-base sm:text-lg md:text-base text-gray-300 leading-relaxed">
      {sentences.map((sentence, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
          animate={isInView ? { 
            opacity: 1, 
            x: 0, 
            filter: "blur(0px)" 
          } : {}}
          transition={{ 
            duration: 0.8, 
            delay: delay + index * 0.3,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {sentence}{index < sentences.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.div>
  );
};

const AdvancedTextSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const loadedImagesRef = useRef(new Set());
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  // Auto-advance gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
      setIsImageLoading(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    } else {
      setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
    setIsImageLoading(true);
  };

  const handleDotClick = (index) => {
    setActiveImage(index);
    setIsImageLoading(true);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="about">
      {/* Background Image with Parallax Effect */}
      <motion.img
        src={Assest17}
        alt="Intro Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
      />

      {/* Animated overlay particles */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Advanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            ref={titleRef}
            className="text-4xl md:text-5xl text-white tracking-tight font-serif italic relative inline-block overflow-hidden"
          >
            {/* Letter-by-letter animation */}
            {"Our Story".split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={isTitleInView ? { 
                  y: 0, 
                  opacity: 1, 
                  rotateX: 0 
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            
            {/* Animated underline with wave effect */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isTitleInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent origin-left"
            >
              <motion.div
                animate={{
                  x: [-100, 100],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut"
                }}
                className="w-8 h-full bg-yellow-400 rounded-full blur-sm"
              />
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Simple Image Gallery */}
          <div className="lg:w-1/2 w-full relative group">
            <div className="relative w-full h-[500px] lg:h-[550px] overflow-hidden rounded-3xl shadow-2xl">
              {/* Simple image without animations */}
              <div className="relative w-full h-full">
                <img
                  src={galleryImages[activeImage].src}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: isImageLoading ? 0 : 1 }}
                  onLoad={() => {
                    setIsImageLoading(false);
                    loadedImagesRef.current.add(activeImage);
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Simple Navigation */}
              <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  onClick={() => handleImageChange("prev")}
                  className="ml-4 p-3 bg-white/90 rounded-full shadow-xl"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleImageChange("next")}
                  className="mr-4 p-3 bg-white/90 rounded-full shadow-xl"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Simple Gallery Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all ${
                      index === activeImage ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            {/* Main heading with word-by-word animation */}
            <AnimatedText
              text="At Solivera, olive oil is not just a product."
              animation="words"
              delay={0.3}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-white"
            />

            {/* Content paragraphs with advanced staggered animations */}
            <motion.div className="space-y-6 mt-6">
              <AnimatedParagraph delay={0.8}>
                At Solivera, olive oil is not just a product. Itʼs a family tradition, a cultural identity, and a passionate craft passed down through generations.
              </AnimatedParagraph>

              <AnimatedParagraph delay={1.2}>
                Our olive trees grow in the ancient soils of Kairouan, Tunisia, where the warm sun, fertile land, and traditional know-how combine to produce an oil of unmatched flavor and purity.
              </AnimatedParagraph>

              <AnimatedParagraph delay={1.6}>
                Each harvest is performed with respect for the environment and a deep connection to our terroir. From the tree to the press, every step is guided by love, heritage, and the pursuit of excellence.
              </AnimatedParagraph>
            </motion.div>

            {/* Call-to-action with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 212, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-full cursor-pointer shadow-lg"
              >
                <AnimatedText
                  text="Discover Our Heritage"
                  animation="letters"
                  delay={2.5}
                  className="text-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTextSection;