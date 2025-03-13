"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-6">Tentang Saya</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Foto Profil */}
        <div className="w-40 h-40">
          <Image
            src="/images/cv1-2.jpg"
            alt="Foto Profil"
            width={160}
            height={160}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <p className="text-gray-700">
            Halo! Saya <span className="font-bold">Kevin Kenardi</span>, seorang
            web developer yang berfokus pada frontend development dengan Next.js
            dan Tailwind CSS. Saya memiliki pengalaman dalam membangun website
            yang cepat, responsif, dan modern.
          </p>

          <p className="mt-4 text-gray-700">
            Saya tertarik pada UI/UX design, performa web, dan animasi interaktif.
            Saat ini, saya aktif mengembangkan proyek-proyek open-source serta
            membantu klien dalam membangun website profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
