import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import { useTranslation } from "react-i18next";
import Heroimage1 from "../images/Heroimage1.jpg"; // Ensure path is correct
import HeroGradient from "../images/HeroGradient.svg"; // Gradient under the image

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Navbar */}
      <NavBar />

      {/* Hero Image */}
      <img
        src={Heroimage1}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-15"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="text-left space-y-8">
              {/* Est. 2017 Divider */}
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-black to-black opacity-60" />
                <div className="ml-4 text-black text-xs tracking-[0.4em] uppercase font-light opacity-80">
                  Est. 2017
                </div>
              </div>

              {/* Main Headline */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight"
                  style={{ color: "#225601" }}
                >
                  <div className="mb-2">
                    {t("Tunisian")}{" "}
                    <motion.span
                      className="italic font-light text-black"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                    >
                      {t("excellence")}
                    </motion.span>
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-black"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                  >
                    {t(" in every drop")}
                  </motion.div>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl font-light text-black opacity-90 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                {t(" From tree to table – naturally tunisian olive oil")}
                <br />
                <span className="text-base opacity-75 mt-2 block">
                  {t(
                    "Experience the purity of nature captured in every moment"
                  )}
                </span>
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 pt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="relative px-8 py-3 bg-black text-white font-medium rounded-sm transition-all duration-500 ease-in-out hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide text-sm border border-black overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {t("Book Your Consultation")}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/AroundWorld"
                    className="relative px-8 py-3 border-2 border-black text-black font-medium rounded-sm transition-all duration-500 ease-in-out hover:bg-black hover:text-white hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide text-sm overflow-hidden group"
                  >
                    <span className="relative z-10">{t("About Us")}</span>
                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Additional Content or Image Space */}
            <div className="hidden lg:flex items-center justify-center">
              {/* This space can be used for product images, additional graphics, or left empty for the background image to show through */}
              <div className="w-full h-64 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
