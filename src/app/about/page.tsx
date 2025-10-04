"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      {/* Arka plan ışımaları */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Başlık */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Mertcem Erbayraktar
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            Full-Stack Developer • React & Node.js Uzmanı • Teknoloji Tutkunu
          </p>
        </header>

        {/* İçerik */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Sol: Görsel */}
          <div className="flex justify-center">
            <div className="group relative w-72 md:w-96">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-2xl md:h-[28rem] md:w-96">
                <Image
                  src="/mert1.jpg"
                  alt="Mertcem Erbayraktar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Küçük rozet */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg ring-1 ring-black/5 backdrop-blur">
                Kodla, yarat, dönüştür 🚀
              </div>
            </div>
          </div>

          {/* Sağ: Metin + mini kartlar + CTA */}
          <article className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Merhaba, ben{" "}
              <span className="font-semibold text-gray-900">Mertcem Erbayraktar</span>.
              Modern web teknolojileriyle üretken, performanslı ve kullanıcı dostu dijital
              deneyimler inşa ediyorum. React, Node.js ve TypeScript benim yaratıcı
              araçlarım. Her satır kodla daha verimli ve estetik çözümler üretmekten keyif
              alıyorum.
            </p>

            <p>
              Son yıllarda onlarca proje geliştirdim: e-ticaret platformları, kişisel web
              siteleri, yönetim panelleri ve API sistemleri. Tasarım estetiğini yazılım
              mantığıyla birleştirerek “kullanıcı deneyimi odaklı” işler çıkarıyorum.
            </p>

            <p>
              Teknolojiyle insan arasında köprü kurmak benim için bir tutku. Yenilikçi fikirleri
              hayata geçirerek markaların dijital dünyada parlamasına yardımcı oluyorum.
            </p>

            {/* Mini istatistik kartları */}
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur">
                <div className="text-xl font-bold text-gray-900">5+</div>
                <div className="text-xs text-gray-500">Yıllık Deneyim</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur">
                <div className="text-xl font-bold text-gray-900">30+</div>
                <div className="text-xs text-gray-500">Tamamlanan Proje</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur sm:col-span-1 col-span-2">
                <div className="text-xl font-bold text-gray-900">React & Node.js</div>
                <div className="text-xs text-gray-500">Uzmanlık Alanı</div>
              </div>
            </div>

            {/* Alıntı bloğu */}
            <blockquote className="relative mt-4 rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 text-sm text-gray-700">
              <span className="absolute -left-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue-500 ring-1 ring-blue-200">
                “
              </span>
              Her proje, yeni bir hayalin kodla gerçeğe dönüşmesidir.
            </blockquote>

            {/* CTA butonları */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                Projelerim
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 px-6 py-3 font-semibold text-gray-800 shadow ring-1 ring-black/10 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                İletişim
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
