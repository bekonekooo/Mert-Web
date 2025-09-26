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
              <strong>Adres:</strong> Yeşilbahçe Mah. Metin Kasapoğlu Cad. Yorgancıoğlu Apt. A Blok No:27/A Muratpaşa / ANTALYA
            </p>
            <p className="text-gray-600">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+905072134181" className="text-lama">
                +90507 213 41 81
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dgceken7@outlook.com"
                className="text-lama hover:underline"
              >
                dgceken7@outlook.com
              </a>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-lama/30"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-lama/30"
              />
              <textarea
                placeholder="Mesajınız"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-lama/30"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-lama text-white py-3 rounded-lg hover:bg-lama/90 transition"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Sağ Taraf - Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.6851094044766!2d30.7174298!3d36.8705143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aa3b1d6c3ad%3A0xf3bada40a382b1f7!2sOptikce!5e0!3m2!1str!2str!4v1695567891234!5m2!1str!2str"
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
