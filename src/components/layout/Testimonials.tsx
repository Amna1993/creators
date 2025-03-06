"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily Johnson",
    image: "/images/portfolio/photo5.jpg",
    review: "An absolute pleasure to work with! The photos were breathtaking and captured our special moments perfectly.",
  },
  {
    name: "Michael Roberts",
    image: "/images/portfolio/photo5.jpg",
    review: "Incredible talent! The attention to detail and creativity in the shots were beyond my expectations.",
  },
  {
    name: "Sophia Martinez",
    image: "/images/portfolio/photo5.jpg",
    review: "I felt so comfortable during my portrait session, and the results were simply stunning. Highly recommended!",
  },
  {
    name: "Daniel Lee",
    image: "/images/portfolio/photo5.jpg",
    review: "The best photography experience ever! Each picture tells a beautiful story. Thank you for the amazing work!",
  },
];

const Testimonials = () => {
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
          What Clients Say
        </motion.h2>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative bg-[#ffffff1a] p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center backdrop-blur-lg border border-[#ffffff33] w-80 sm:w-96 flex-shrink-0 mx-2 hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.08 }}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#ece7d5] shadow-md">
                  <Image src={testimonial.image} alt={testimonial.name} layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
                <p className="mt-2 text-lg opacity-80 italic">&quot;{testimonial.review}&quot;</p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
