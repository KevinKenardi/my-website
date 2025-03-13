"use client";
//import { motion } from "framer-motion"; // Tambahkan ini di bagian atas file
import { projects } from "../data/projects";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-5">
  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
    Portofolio
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      <div key={index} className="bg-white p-4 md:p-5 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"> 
        <Image 
          src={project.image} 
          alt={project.title} 
          width={500} 
          height={300} 
          className="rounded-lg w-full object-cover"
        />
        <h2 className="text-xl md:text-2xl font-semibold mt-4">
          {project.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          {project.description}
        </p>
        <div className="mt-4 flex gap-3">
        <a href={project.link} className="text-blue-500 hover:text-blue-700 transition" target="_blank">
            Live Demo
          </a>
          <a href={project.github} className="text-gray-500 hover:underline" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}