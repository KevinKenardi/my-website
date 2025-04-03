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

  const renderImage = () => {
    if (!section.image) return null;

    const imageProps = {
      src: section.image,
      alt: section.title,
      initial: { opacity: 0, scale: 0.8 },
      animate: inView ? { opacity: 1, scale: 1 } : {},
      transition: { duration: 0.7, delay: 0.6 },
    };

    if (section.id === "about me") {
      return (
        <motion.img
          {...imageProps}
          width={400}
          height={400}
          className="mx-auto mt-4 shadow-lg w-[400px] h-[400px] rounded-full object-cover object-top"
        />
      );
    }

    if (section.id === "portfolio") {
      return (
        <motion.img
          {...imageProps}
          width={300}
          height={300}
          className="mx-auto mt-10 shadow-lg w-100 h-100 rounded-none"
        />
      );
    }

    return (
      <motion.img
        {...imageProps}
        width={300}
        height={300}
        className="mx-auto mt-4 shadow-lg w-52 h-52 object-cover object-top rounded-full"
      />
    );
  };

  const renderContent = () => {
    if (section.id === "portfolio") {
      return (
        <>
          <motion.p
            className="text-4xl text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {section.content}
          </motion.p>
        </>
      );
    }

    if (section.media) {
      return (
        <motion.div
          className="mt-4 mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {section.media}
        </motion.div>
      );
    }

    return (
      <motion.p
        className="text-4xl text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {section.content}
      </motion.p>
    );
  };

  return (
    <motion.div
      ref={ref}
      id={section.id}
      key={section.id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`my-16 ${section.id === "portfolio" ? "text-left ml-10" : "text-center "}`}
    >

      {section.id !== "portfolio" && renderImage()}

      <motion.h1
        className={`text-4xl font-bold mb-10 ${
          section.id === "portfolio" ? "text-left" : "text-center mt-20"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {section.title}
      </motion.h1>

      {section.id === "portfolio" && (
        <>
          {renderContent()}
          {renderImage()}
        </>
      )}

      {section.id !== "portfolio" && renderContent()}
    </motion.div>
  );
};

export default Section;
