"use client";

import { motion } from "framer-motion";
//import { ReactNode } from "react"; //never mentioned

//import { type Metadata } from "next"; //never mentioned
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientNav from "../components/ClientNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-gray-800 p-4 text-white">
          <ClientNav />
        </header>
        
        {/* Tambahkan animasi halaman */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main>{children}</main>
        </motion.div>

        <footer className="bg-gray-800 text-white text-center p-4 mt-4">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
