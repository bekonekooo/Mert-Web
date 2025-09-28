"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Başlık */}
      <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
        Hakkımda
      </h1>

      {/* İçerik alanı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Sol kısım - Görsel */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/woman.png" // kendi görselini buraya koy
              alt="Bağnu Çorakçı"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sağ kısım - Yazı */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Merhaba, ben{" "}
            <span className="font-semibold text-gray-900">Bağnu Çorakçı</span>.  
            2012 yılında ThetaHealing® ile tanışmam hayatımda büyük bir dönüm 
            noktası oldu. Çocukluk travmama bağlı topluluk önünde konuşma korkumu 
            bu yöntem sayesinde aştım ve şimdi başkalarına da aynı dönüşümü 
            yaşatmaya adadım kendimi.
          </p>

          <p>
            Hacettepe Üniversitesi’nde lisans eğitimimi tamamladıktan sonra, 
            davranış bilimleri alanında yüksek lisans yaptım. Aile Dizimi, Kuantum 
            Yaşam Koçluğu, NLP Master Practitioner (Richard Bandler), Nefes Koçluğu, 
            Reiki, Hipnoz, Adler Master Koçluk ve Merkaba eğitimleri aldım. 
            Hem uygulayıcı hem de eğitmen olarak birçok kişiye rehberlik ediyorum.
          </p>

          <p>
            Bugün bireysel seanslar, seminerler ve eğitimlerle insanların kendi 
            içlerindeki gücü hatırlamalarına ve hayatlarında kalıcı dönüşümler 
            yaratmalarına destek oluyorum.
          </p>

          {/* Butonlar */}
          <div className="flex gap-4 pt-4">
            <a
              href="/sessions"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
            >
              Seans Al
            </a>
            <a
              href="/trainings"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow-md hover:bg-gray-300 transition"
            >
              Eğitimlerim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}