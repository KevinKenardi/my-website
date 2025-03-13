import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281280590851?text=Halo, saya ingin bertanya tentang layanan Anda."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
    >
      💬 Chat via WhatsApp
    </a>
  );
}
