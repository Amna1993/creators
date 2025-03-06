"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#b99e66] text-[#ece7d5] py-12 text-center">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold uppercase tracking-wide">Amna Razzaq Awan Photography</h2>
        <p className="mt-2 text-lg opacity-80">Capturing the beauty of life, one moment at a time.</p>

        
        <div className="flex justify-center space-x-6 mt-6">
          <motion.a href="#" className="hover:text-[#7f573e] transition" whileHover={{ scale: 1.1 }}>
            <Facebook size={30} />
          </motion.a>
          <motion.a href="#" className="hover:text-[#7f573e] transition" whileHover={{ scale: 1.1 }}>
            <Instagram size={30} />
          </motion.a>
          <motion.a href="#" className="hover:text-[#7f573e] transition" whileHover={{ scale: 1.1 }}>
            <Twitter size={30} />
          </motion.a>
          <motion.a href="#" className="hover:text-[#7f573e] transition" whileHover={{ scale: 1.1 }}>
            <Linkedin size={30} />
          </motion.a>
        </div>

        <p className="mt-6 text-sm opacity-70">© 2025 Amna Razzaq Awan. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
