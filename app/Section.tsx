"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface SectionProps {
  section: {
    id: string;
    title: string;
    content: string;
    image?: string;
    media?: React.ReactNode;
  };
}

const Section: React.FC<SectionProps> = ({ section }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      id={section.id}
      key={section.id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-16 text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {section.title}
      </motion.h2>

      <motion.p
        className="text-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {section.content}
      </motion.p>

      {section.media && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {section.media}
        </motion.div>
      )}

      {section.image && (
        <motion.img
          src={section.image}
          alt={section.title}
          width={300}
          height={300}
          className="rounded-full shadow-lg mx-auto mt-4 transition transform hover:rotate-6 hover:scale-110 duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
      )}
    </motion.div>
  );
};

export default Section;
