"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#dacfae] overflow-hidden">
      
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute inset-0 bg-gradient-to-t from-[#dacfae] to-transparent"></div>

     
      <div className="relative z-10 text-center text-[#ece7d5] px-4 sm:px-6 max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide uppercase leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Capturing Moments, <br className="hidden sm:block" /> Creating Stories
        </motion.h1>

        <motion.p
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-light opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Experience the art of photography through my lens. <br className="hidden sm:block" />
          A timeless collection of emotions and memories.
        </motion.p>

       
        <motion.a
          href="#portfolio"
          className="inline-block mt-5 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold uppercase tracking-wide bg-[#b99e66] hover:bg-[#7f573e] transition-all duration-300 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
        >
          View Portfolio
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
