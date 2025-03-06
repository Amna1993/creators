"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-[#dacfae] text-[#ece7d5]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-80 md:h-[500px] overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/portfolio/photo3.jpg"
            alt="Photographer"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase mb-6">
            Meet the Photographer
          </h2>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            I&apos;m a passionate photographer with a love for capturing the beauty in everyday moments. 
            With years of experience in portrait, wedding, and travel photography, I strive to tell 
            compelling stories through my lens. Every frame is a masterpiece, preserving emotions that 
            last a lifetime.
          </p>
          <motion.a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold uppercase tracking-wide bg-[#b99e66] hover:bg-[#7f573e] transition-all duration-300 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
