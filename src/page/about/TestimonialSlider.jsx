/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
// import {   } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import img1 from '../../assets/images/auto-1.jpg'
const testimonials = [
  {
    name: "David Matin",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "CarCare has been fantastic! Fast service and friendly staff. I always trust them with my car needs.",
  },
  {
    name: "Sophia Turner",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Reliable and affordable. The best garage I’ve worked with in years. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Great experience every time. Transparent pricing and top-quality repairs!",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const current = testimonials[index];

  return (
    <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${img1})`, // Replace with your image
      }}
    >
      <div className="absolute inset-0  z-0"></div>

      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          WHAT PEOPLE ARE SAYING
        </h2>
        <p className="text-lg text-red-300 mb-6 font-semibold">
          Best Cleaning Deals
        </p>

        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="px-4"
          >
            <div className="flex flex-col items-center space-y-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-20 h-20 rounded-full border-4 border-red-500"
              />
              <Quote className="text-red-500 w-6 h-6" />
              <p className="text-white text-lg leading-relaxed max-w-2xl">
                {current.message}
              </p>
              <div>
                <h4 className="text-xl font-semibold">{current.name}</h4>
                <span className="text-red-400 italic">{current.role}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => paginate(-1)}
            className="bg-gray-700 p-2 rounded-full hover:bg-red-500"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-gray-700 p-2 rounded-full hover:bg-red-500"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
