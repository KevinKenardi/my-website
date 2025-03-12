"use client";
import { motion } from "framer-motion"; // Tambahkan ini di bagian atas file

export default function Portfolio() {
  const projects = [
    { title: "Website Company Profile", description: "Membangun website untuk perusahaan teknologi." },
    { title: "Aplikasi E-commerce", description: "Sistem penjualan online dengan integrasi payment gateway." },
    { title: "Landing Page Digital Marketing", description: "Halaman landing untuk kampanye pemasaran." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-4 shadow-lg bg-white"
            whileHover={{ scale: 1.05 }}  // Efek membesar saat hover
            whileTap={{ scale: 0.95 }}    // Efek mengecil saat diklik
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
