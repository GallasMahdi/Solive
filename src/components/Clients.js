import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ProductBG from "../images/ProductBG.svg"; // Background image

// Certifications images
import USDACert from "../images/USDACert.svg";
import EcoCert from "../images/EcoCert.svg";
import BioCert from "../images/BioCert.svg";
import IsoCert from "../images/IsoCert.svg";

// Product images
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";

import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  const certifications = [
    { src: USDACert, alt: "USDA" },
    { src: EcoCert, alt: "EcoCert" },
    { src: BioCert, alt: "BioCert" },
    { src: IsoCert, alt: "ISO" },
  ];

  const products = [prod1, prod2, prod3];

  // Products responsive carousel (middle product bigger)
  const productsResponsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  // Certifications responsive carousel
  const certsResponsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16 overflow-hidden">
      {/* Background Image */}
      <img
        src={ProductBG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Products Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center space-y-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center justify-center space-x-12 flex-wrap"
        >
          {products.map((product, index) => {
            const scale = index === 1 ? 1.5 : 1; // middle product bigger
            return (
              <motion.div
                key={index}
                whileHover={{ scale: scale + 0.05 }}
                whileTap={{ scale: scale - 0.05 }}
                initial={{ scale }}
                className="w-80 h-80 flex items-center justify-center rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={product}
                  alt={`Product ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

<div className="relative z-10 container mx-auto text-center mt-24"> {/* Increased margin-top */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl italic text-gray-800 uppercase font-serif mb-8" // Added mb-8 for spacing
  >
    {t("Certifications")}
  </motion.h2>

  <Carousel
    responsive={certsResponsive}
    infinite={certifications.length > 4} // Disable infinite if few items
    centerMode={window.innerWidth >= 768} // Only center on tablet+ and desktop
    autoPlay={true}
    autoPlaySpeed={1500}
    keyBoardControl={true}
    transitionDuration={700}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    renderDotsOutside={true}
    containerClass="w-full flex justify-center px-4"
    itemClass="px-4 flex justify-center"
  >
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-56 h-40 flex items-center justify-center rounded-lg shadow-md overflow-hidden bg-transparent">
          <img
            src={cert.src}
            alt={cert.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </motion.div>
    ))}
  </Carousel>
</div>
    </div>
  );
};

export default Clients;
