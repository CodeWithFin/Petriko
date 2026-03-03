"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./blocks/testimonials-columns-1";

// Adapted testimonials for an Interior Design firm
export const testimonials = [
  {
    text: "Petriko completely transformed our living space. Their attention to detail and premium finish exceeded every expectation.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah K.",
    role: "Homeowner",
  },
  {
    text: "Working with them was seamless. The bespoke furniture fits our office perfectly, bringing a modern yet timeless aesthetic.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David M.",
    role: "Corporate Client",
  },
  {
    text: "From 3D rendering to final execution, the Petriko team was professional, transparent, and delivered ahead of schedule.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Amina Hassan",
    role: "Restaurant Owner",
  },
  {
    text: "The wooden paneling and lighting design they did for our boutique hotel is absolutely stunning. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "James Wandera",
    role: "Hotel Manager",
  },
  {
    text: "Excellent project management. They handled everything from sourcing materials to contractor coordination effortlessly.",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    name: "Grace N.",
    role: "Property Developer",
  },
  {
    text: "Our kitchen remodel is flawless. The cabinetry work is top-tier and the space feels incredibly functional and luxurious.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Linda O.",
    role: "Homeowner",
  },
  {
    text: "They understood our vision immediately and translated it into a design that represents our brand perfectly.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "The gypsum ceilings and ambient lighting have completely changed the mood of our home. Brilliant craftsmanship.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Homeowner",
  },
  {
    text: "Quality materials, highly skilled artisans, and a very communicative design team. Worth every penny.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Kelvin T.",
    role: "Business Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-[var(--c-bg)] py-32 relative border-t border-black/5">
      <div className="container px-6 md:px-20 max-w-[1400px] z-10 mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-xs font-normal tracking-[0.2em] text-[#b19777] uppercase mb-4">
              Client Feedback
            </span>
            <h2 className="display-font text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#111] uppercase">
              What they <span className="italic font-light">say</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6 mt-20 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="w-full max-w-sm" />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block w-full max-w-sm" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
