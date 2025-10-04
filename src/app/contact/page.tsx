"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 md:p-12">
      <section className="max-w-6xl mx-auto space-y-16">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            İletişim
          </h1>
          <p className="mt-3 text-gray-600 text-lg md:text-xl">
            Projeleriniz, iş birliği fırsatları veya sorularınız için bizimle iletişime geçin.
          </p>
        </motion.div>

        {/* İletişim Bilgileri ve Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sol Taraf */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800">İletişim Bilgileri</h2>

            <p className="text-gray-600">
              <strong>Adres:</strong>{" "}
              Ankara, Türkiye
            </p>

            <p className="text-gray-600">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+905417146360" className="text-blue-600 hover:underline">
                +90 541 714 63 60
              </a>
            </p>

            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:berkayyaydin@gmail.com"
                className="text-blue-600 hover:underline break-all"
              >
                berkayyaydin@gmail.com
              </a>
            </p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
              />
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 outline-none transition"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-medium hover:scale-105 transform transition"
              >
                Gönder
              </button>
            </form>
          </motion.div>

          {/* Sağ Taraf - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-[450px] md:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Ankara%20Türkiye&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
