"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#b99e66] to-[#7f573e] text-[#ece7d5]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Heading with Motion */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold uppercase mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4">
              <Mail size={30} />
              <p className="text-lg">info@photographer.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={30} />
              <p className="text-lg">+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={30} />
              <p className="text-lg">123 Street, Montreal, Canada</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-[#ffffff1a] p-8 rounded-xl shadow-xl backdrop-blur-lg border border-[#ffffff33] flex flex-col space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <input type="text" placeholder="Your Name" className="bg-transparent border-b p-3 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="bg-transparent border-b p-3 focus:outline-none" />
            <textarea placeholder="Your Message" rows={4} className="bg-transparent border-b p-3 focus:outline-none"></textarea>
            <motion.button
              className="bg-[#7f573e] text-[#ece7d5] py-3 px-6 rounded-full font-bold flex items-center justify-center space-x-2 transition-all hover:bg-[#5d402c]"
              whileHover={{ scale: 1.1 }}
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
