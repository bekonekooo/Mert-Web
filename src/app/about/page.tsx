"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 md:p-12">
      <section className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              OPTİKCE — Göz Sağlığınıza Özenle Bakıyoruz
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Yılların verdiği uzmanlıkla modern tasarımın buluştuğu yer. OPTİKCE olarak, doğru görmeyi sadece bir ihtiyaç değil, yaşam kalitenizi yükselten bir sanat olarak görüyoruz.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-block px-6 py-3 rounded-lg ring-1 ring-indigo-200 hover:shadow-lg font-medium">
                Hizmetlerimizi İncele
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
                Randevu Al
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden ring-2 ring-gray-100">
              <Image
                alt="optikce-store"
                src="/woman.png"
                width={288} // md:w-72 = 18rem
                height={288}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Misyonumuz</h3>
            <p className="mt-3 text-gray-600">
              Her müşteriye bireysel yaklaşarak, en doğru görme çözümlerini sunmak.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Vizyonumuz</h3>
            <p className="mt-3 text-gray-600">
              Teknoloji ve estetiği birleştirerek, Türkiye genelinde güvenilen bir optik markası olmak.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl">Değerlerimiz</h3>
            <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
              <li>Müşteri odaklı hizmet</li>
              <li>Uzman kadro ve etik yaklaşımlar</li>
              <li>Kalite ve şeffaflık</li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <section id="services" className="mt-12">
          <h2 className="text-2xl font-bold">Neler Yapıyoruz?</h2>
          <p className="text-gray-600 mt-3">OPTİKCE de sunduğumuz başlıca hizmetler:</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Göz Muayenesi & Reçete",
                desc: "Güncel teknoloji ile kapsamlı muayene, doğru reçete ve takip.",
              },
              {
                title: "Numaralı & Güneş Gözlükleri",
                desc: "Sezon trendlerine uygun çerçeveler ve kaliteli cam seçenekleri.",
              },
              {
                title: "Çocuk Göz Sağlığı",
                desc: "Çocuklar için dikkatli ve nazik muayene süreci ile erken teşhis.",
              },
              {
                title: "Kontakt Lens Danışmanlığı",
                desc: "Doğru lens seçimi, eğitim ve bakım desteği.",
              },
              {
                title: "Özel Tasarım Çerçeve",
                desc: "Kişiye özel ölçümler ve şık tasarımlar.",
              },
              {
                title: "Onarım & Bakım",
                desc: "Çerçeve ayarı, cam temizliği ve hızlı tamir hizmetleri.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Ekibimiz</h2>
          <p className="text-gray-600 mt-3">
            Göz sağlığınız uzman ellerde — deneyimli optometrist ve optisyenlerimizle tanışın.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Ayşe Yılmaz", role: "Baş Optometrist" },
              { name: "Mehmet Kaya", role: "Optisyen" },
              { name: "Elif Demir", role: "Çocuk Göz Sağlığı Uzmanı" },
            ].map((m) => (
              <div key={m.name} className="bg-white p-6 rounded-xl flex flex-col items-start gap-3 shadow-sm">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src="/woman.png"
                    alt={m.name}
                    width={80} // w-20 = 5rem
                    height={80}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{m.name}</h4>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Müşteri Yorumları</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Banu", text: "Çok ilgili bir ekip ve harika çerçeveler!" },
              { name: "Kerem", text: "Muayene detaylıydı, lens seçimi konusunda çok yardımcı oldular." },
              { name: "Selin", text: "Çocuklar için çok nazikçe yaklaşıyorlar. Güvenerek gidiyorum." },
            ].map((t) => (
              <blockquote key={t.name} className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-gray-700">“{t.text}”</p>
                <footer className="mt-3 text-sm text-gray-500">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-12 bg-indigo-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Randevu Almak İster misiniz?</h3>
              <p className="mt-2 text-gray-600">Hızlı bir muayene veya çerçeve denemesi için bizimle iletişime geçin.</p>
            </div>

            <div className="flex gap-3">
              <a href="tel:+901234567890" className="inline-block px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium">
                Ara: +90 123 456 78 90
              </a>
              <a href="/contact" className="inline-block px-5 py-3 rounded-lg ring-1 ring-indigo-200">
                İletişim Formu
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OPTİKCE. Tüm hakları saklıdır.
        </footer>
      </section>
    </main>
  );
}
