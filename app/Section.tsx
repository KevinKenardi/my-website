"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface SectionProps {
  section: {
    id: string;
    title: string;
    content?: string; // Opsional
    image?: string; // Opsional
    media?: React.ReactNode; // Opsional
    projects?: { name: string; image?: string }[]; // Opsional
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
    if (section.id === "portfolio" && section.projects) {
      return (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {section.projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">No Image</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.image ? "Description of " + project.name : "Coming soon..."}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
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
