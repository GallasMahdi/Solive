import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  Sparkles,
  Gem,
  ChevronDown,
  Quote,
  Users,
  Leaf,
  Award,
  Heart,
  Clock,
  Shield,
} from "lucide-react";
import NavBar from "../components/Navbar/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const AroundWorld = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 100);

      const sections = [
        "hero",
        "about",
        "products",
        "quality",
        "process",
        "testimonials",
        "tips",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));
      const currentSection = sectionElements.findIndex((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      });
      if (currentSection !== -1) setActiveSection(sections[currentSection]);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % oliveTips.length);
    }, 5000);
    return () => clearInterval(tipInterval);
  }, []);

  const products = [
    {
      title: "Extra Virgin Olive Oil",
      description:
        "Cold-pressed from our finest olives, rich in flavor and aroma.",
      features: ["First cold press", "Low acidity (<0.8%)", "Peppery finish"],
    },
    {
      title: "Organic Olive Oil",
      description:
        "Certified organic oil maintaining purity and natural taste.",
      features: [
        "EU Organic Certified",
        "No pesticides",
        "Sustainable farming",
      ],
    },
    {
      title: "Flavored Olive Oil",
      description: "Infused with herbs and spices for culinary excellence.",
      features: [
        "Natural infusions",
        "Lemon & garlic variants",
        "Perfect for dressings",
      ],
    },
  ];

  const qualityServices = [
    {
      icon: Gem,
      title: "Premium Quality",
      description:
        "Strict selection of olives and modern cold-press techniques.",
    },
    {
      icon: Leaf,
      title: "Traditional Methods",
      description:
        "Combining ancestral know-how with state-of-the-art production.",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "Eco-friendly farming practices and respect for nature.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized internationally for excellence in olive oil production.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Harvesting",
      description:
        "Hand-picked olives at the perfect ripeness to ensure premium quality.",
    },
    {
      step: "2",
      title: "Cleaning",
      description:
        "Thorough washing to remove leaves, twigs, and other impurities.",
    },
    {
      step: "3",
      title: "Cold Pressing",
      description:
        "Extracted within hours of harvesting to preserve flavor and nutrients.",
    },
    {
      step: "4",
      title: "Decantation",
      description:
        "Natural separation of oil from water and solids without chemicals.",
    },
    {
      step: "5",
      title: "Filtration",
      description:
        "Gentle filtration to maintain quality while removing sediment.",
    },
    {
      step: "6",
      title: "Bottling",
      description:
        "Dark glass bottles to protect from light and preserve freshness.",
    },
  ];

  const testimonials = [
    {
      name: "Chef Marco B.",
      role: "Michelin Star Chef",
      content:
        "Huilerie Chelbi's olive oil transforms my dishes. The complexity and depth of flavor are unmatched.",
    },
    {
      name: "Sophie L.",
      role: "Food Blogger",
      content:
        "I've tried olive oils from across the Mediterranean, but none compare to the quality and taste of Chelbi's products.",
    },
    {
      name: "Ahmed T.",
      role: "Local Farmer",
      content:
        "For generations, our family has supplied olives to Huilerie Chelbi. Their commitment to quality and fair practices is exceptional.",
    },
  ];

  const oliveTips = [
    {
      title: "How to Store Olive Oil",
      content:
        "Keep your olive oil in a cool, dark place to preserve its flavor and nutrients. Avoid storing near heat sources.",
    },
    {
      title: "Cooking with Olive Oil",
      content:
        "Discover the best ways to use extra virgin olive oil for cooking and finishing dishes. Different varieties suit different cooking methods.",
    },
    {
      title: "Health Benefits of Olive Oil",
      content:
        "Learn about the nutritional advantages and antioxidant properties of olive oil, including heart health and anti-inflammatory benefits.",
    },
    {
      title: "Tasting Olive Oil",
      content:
        "Proper tasting involves assessing the fruitiness, bitterness, and pungency. Look for balanced complexity in quality oils.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#fff6e3] text-black overflow-hidden">
      <NavBar />

      {/* Mobile Menu */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full bg-[#272e02]/20 backdrop-blur-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6 text-black" />
        </motion.button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 w-48 rounded-xl bg-white/90 backdrop-blur-xl p-4 shadow-lg"
            >
              {[
                "hero",
                "about",
                "products",
                "quality",
                "process",
                "testimonials",
                "tips",
              ].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-[#225601]/20 transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg.jpg")}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-center"
          />
          {/* Overlay Colors for Luxury Effect */}
          <div className="absolute inset-0 bg-[#272e02]/30"></div>
          <div className="absolute inset-0 bg-[#fff6e3]/10 animate-pulse"></div>

          {/* Floating Blurred Circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto w-16 sm:w-20 h-16 sm:h-20 mb-6"
          >
            <Sparkles className="w-full h-full text-[#225601]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 tracking-wide text-white drop-shadow-lg"
          >
            Huilerie Chelbi – Pure Olive Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed px-4 text-white/90 drop-shadow-md"
          >
            From the fertile lands of Kairouan, Tunisia, we produce premium
            olive oils that honor tradition, sustainability, and excellence.
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#products"
            className="inline-flex items-center px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-[#272e02] border-2 border-[#272e02] rounded-full hover:bg-[#272e02] hover:text-white transition-all duration-300 mb-12"
          >
            <span className="relative z-10">Explore Our Products</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-32 relative px-4 sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg2.jpg")}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Colors for Luxury Effect */}
          <div className="absolute inset-0 bg-[#272e02]/30"></div>
          <div className="absolute inset-0 bg-[#fff6e3]/10 animate-pulse"></div>

          {/* Optional floating blurred elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* About Content */}
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="bg-white/90 rounded-3xl p-8 sm:p-16 text-center border border-black/10 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#fff6e3] mb-8"
            >
              <Users className="w-10 h-10 text-[#225601]" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-black drop-shadow-lg">
              About Huilerie Chelbi
            </h2>

            <p className="text-base sm:text-xl max-w-4xl mx-auto mb-8 leading-relaxed text-black/90 drop-shadow-md">
              Established in 1987, Huilerie Chelbi represents four generations
              of olive oil craftsmanship. Our olive oils are a family tradition,
              carefully crafted from hand-picked olives using both traditional
              and modern methods. Every drop reflects the richness of Tunisian
              heritage. We embrace sustainability and modern innovation while
              honoring centuries-old techniques.
            </p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "4+", label: "Generations" },
                { value: "1000+", label: "Hectares" },
                { value: "30+", label: "Awards" },
                { value: "15+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-4 bg-[#fff6e3] rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#225601]">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-black/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-32 px-4 sm:px-6 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg.jpg")}
            alt="Products Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Colors for Depth */}
          <div className="absolute inset-0 bg-[#225601]/20"></div>
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          {/* Floating blurred elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Products Content */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Our Products
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-white/90 p-6 sm:p-8 border border-black/10 shadow hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#225601]/20 to-[#d4a574]/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/80 flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Gem className="w-8 h-8 text-[#225601]" />
                  </motion.div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base text-black/80 mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm text-black/70"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Heart className="w-4 h-4 mr-2 text-[#225601]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 rounded-lg bg-[#225601] text-white font-medium hover:bg-[#1a4301] transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      {/* Quality Section */}
      <section id="quality" className="py-16 sm:py-32 px-4 sm:px-6 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg2.jpg")}
            alt="Quality Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Colors for Depth */}
          <div className="absolute inset-0 bg-[#225601]/20"></div>
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          {/* Floating blurred elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Our Commitment to Quality
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {qualityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl bg-white/90 p-6 sm:p-8 border border-black/10 shadow hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#fff6e3] flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon
                    className="w-8 h-8 text-[#225601]"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-black/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-32 px-4 sm:px-6 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg2.jpg")}
            alt="Process Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#225601]/20"></div>
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          {/* Floating blurred elements */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Our Artisanal Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white/90 rounded-2xl p-6 shadow-md border border-black/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-[#225601]/30 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-black/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 sm:py-32 px-4 sm:px-6 relative"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg.jpg")}
            alt="Testimonials Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#225601]/20"></div>
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          {/* Floating blurred elements */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/90 rounded-2xl p-6 shadow-md border border-black/10"
              >
                <Quote className="w-10 h-10 text-[#225601]/30 mb-4" />
                <p className="text-black/80 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="font-bold text-black">{testimonial.name}</div>
                <div className="text-sm text-black/60">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-16 sm:py-32 px-4 sm:px-6 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={require("../images/bg.jpg")}
            alt="Tips Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#225601]/20"></div>
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>

          {/* Floating blurred elements */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-[#225601]/10 filter blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-[#d4a574]/10 filter blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
          >
            Olive Oil Tips & Insights
          </motion.h2>

          <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl p-6 shadow-md border border-black/10 relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTip}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-6"
              >
                <div className="flex items-start mb-4">
                  <Clock className="w-6 h-6 text-[#225601] mr-3 mt-1" />
                  <h3 className="text-2xl font-bold text-black">
                    {oliveTips[currentTip].title}
                  </h3>
                </div>
                <p className="text-black/80 text-lg">
                  {oliveTips[currentTip].content}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 flex space-x-2">
              {oliveTips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTip(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTip === index ? "bg-[#225601]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#225601] text-white py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Huilerie Chelbi</h3>
              <p className="opacity-80">From our family to your table, for over four generations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="opacity-80">Kairouan, Tunisia</p>
              <p className="opacity-80">contact@huileriechelbi.com</p>
              <p className="opacity-80">+216 12 345 678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="opacity-80 hover:opacity-100"
                    whileHover={{ y: -3 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-70">
            <p>© {new Date().getFullYear()} Huilerie Chelbi. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <Footer />

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-black/90 transition-all duration-300 border border-black shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-[-90deg] text-white" />
      </motion.button>
    </div>
  );
};

export default AroundWorld;
