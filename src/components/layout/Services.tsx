"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Users, Gift, Plane, Brush } from "lucide-react";

const services = [
  { title: "Portrait Photography", icon: <Users size={50} />, description: "Capturing personalities with stunning detail and elegance." },
  { title: "Wedding Photography", icon: <Heart size={50} />, description: "Turning your love story into timeless, heartfelt images." },
  { title: "Event Coverage", icon: <Gift size={50} />, description: "Documenting special occasions with professionalism and creativity." },
  { title: "Product Photography", icon: <Camera size={50} />, description: "Enhancing brand identity with stunning product visuals." },
  { title: "Travel & Lifestyle", icon: <Plane size={50} />, description: "Showcasing cultures and adventures through breathtaking photography." },
  { title: "Custom Projects", icon: <Brush size={50} />, description: "Bringing your unique vision to life with customized photography." },
];

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#dacfae] to-[#b99e66] text-[#ece7d5]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Heading with Motion */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold uppercase mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Photography Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-[#ffffff1a] p-8 rounded-xl shadow-xl flex flex-col items-center text-center transition-all duration-500 backdrop-blur-lg border border-[#ffffff33] hover:scale-105 hover:border-[#ffffff66]"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon with Animated Glow */}
              <motion.div
                className="mb-4 text-[#ece7d5] p-4 rounded-full bg-[#ffffff1a] shadow-lg"
                whileHover={{ scale: 1.2 }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold uppercase tracking-wide">{service.title}</h3>

              {/* Description */}
              <p className="mt-2 text-lg opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
