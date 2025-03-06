"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#b99e66] shadow-lg py-3" : "bg-[#b99e66] py-4"
      } border-b border-t border-[#ece7d5]`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto md:gap-12 relative px-6 md:px-12">
        
      
        <div className="flex items-center space-x-4 md:space-x-6 relative">
          <span className="absolute top-[-8px] left-0 w-full h-[2px] bg-[#ece7d5] hidden md:block"></span>
          <a href="#home" className="text-lg hover:opacity-80 transition">Home</a>
          <a href="#portfolio" className="text-lg hover:opacity-80 transition">Portfolio</a>
          <a href="#about" className="text-lg hover:opacity-80 transition">About</a>
          <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#ece7d5] hidden md:block"></span>
        </div>

       
        <motion.div 
          className="text-2xl md:text-4xl font-bold uppercase bg-gradient-to-r from-[#dacfae] via-[#ede8d8] to-[#f9f7f1] bg-clip-text text-transparent animate-pulse drop-shadow-lg tracking-widest"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AMNA RAZZAQ AWAN
        </motion.div>

      
        <div className="flex items-center space-x-4 md:space-x-6 relative">
          <span className="absolute top-[-8px] left-0 w-full h-[2px] bg-[#ece7d5] hidden md:block"></span>
          <a href="#services" className="text-lg hover:opacity-80 transition">Services</a>
          <a href="#testimonials" className="text-lg hover:opacity-80 transition">Testimonials</a>
          <a href="#contact" className="text-lg hover:opacity-80 transition">Contact</a>
          <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#ece7d5] hidden md:block"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
