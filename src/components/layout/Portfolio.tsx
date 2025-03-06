"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/portfolio/photo1.jpg",
  "/images/portfolio/photo2.jpg",
  "/images/portfolio/photo3.jpg",
  "/images/portfolio/photo4.jpg",
  "/images/portfolio/photo5.jpg",
  "/images/portfolio/photo6.jpg",
  "/images/portfolio/photo7.jpg",
  "/images/portfolio/photo8.jpg",
  "/images/portfolio/photo9.jpg",
  "/images/portfolio/photo10.jpg",
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-[#dacfae] text-[#ece7d5] overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mb-12">
        Portfolio Showcase
      </h2>

      {/* First Row (Scrolls Left to Right) */}
      <motion.div
        className="flex space-x-4 sm:space-x-6 overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {images.slice(0, 5).map((src, index) => (
          <div key={index} className="relative w-40 sm:w-52 md:w-72 h-32 sm:h-40 md:h-56 flex-shrink-0">
            <Image
              src={src}
              alt={`Portfolio Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>

      {/* Center Row (Scaling Effect) - Centered */}
      <motion.div
        className="flex justify-center items-center space-x-4 sm:space-x-6 overflow-hidden mt-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.05 }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", repeatType: "reverse" }}
      >
        {images.slice(2, 7).map((src, index) => (
          <motion.div
            key={index}
            className="relative w-48 sm:w-60 md:w-80 h-36 sm:h-48 md:h-64 flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={src}
              alt={`Portfolio Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row (Scrolls Right to Left) */}
      <motion.div
        className="flex space-x-4 sm:space-x-6 overflow-hidden mt-8"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      >
        {images.slice(5, 10).map((src, index) => (
          <div key={index} className="relative w-40 sm:w-52 md:w-72 h-32 sm:h-40 md:h-56 flex-shrink-0">
            <Image
              src={src}
              alt={`Portfolio Image ${index + 6}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
