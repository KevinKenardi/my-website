"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim! (Belum ada backend)");
  };

  return (
    <section className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">Hubungi Saya</h1>
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-lg">
        <input 
          type="text" name="name" placeholder="Nama" 
          className="w-full border p-2 mb-4 rounded" 
          onChange={handleChange}
        />
        <input 
          type="email" name="email" placeholder="Email" 
          className="w-full border p-2 mb-4 rounded" 
          onChange={handleChange}
        />
        <textarea 
          name="message" placeholder="Pesan Anda" rows={4} 
          className="w-full border p-2 mb-4 rounded" 
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
          Kirim
        </button>
      </form>
    </section>
  );
}
