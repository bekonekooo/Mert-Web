"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 md:p-12">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Başlık */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Bize Ulaşın</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Sorularınız ve randevularınız için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Taraf */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold">İletişim Bilgileri</h2>
            <p className="text-gray-600">
              <strong>Adres:</strong> Örnek Mah. Gözlük Sok. No:12, Antalya
            </p>
            <p className="text-gray-600">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+901234567890" className="text-indigo-600">
                +90 123 456 78 90
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@optikce.com"
                className="text-indigo-600 hover:underline"
              >
                info@optikce.com
              </a>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200"
              />
              <textarea
                placeholder="Mesajınız"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Sağ Taraf - Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6401.743756437632!2d30.700123!3d36.884804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3916ab3f21a8d%3A0x64a3e2f8b12c6d91!2sAntalya!5e0!3m2!1str!2str!4v1695567891234!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
