"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientNav() {
  return (
    <nav className="flex justify-center space-x-4">
      {["Home", "About", "Portfolio", "Contact"].map((item) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={item}
        >
          <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-400">
            {item}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
