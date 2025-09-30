"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      {/* arka plan ışımaları */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* başlık */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              Hakkımda
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            ThetaHealing® Master & Science Instructor • Ruhsal Gelişim Eğitmeni
          </p>
        </header>

        {/* içerik */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* sol: görsel kart */}
          <div className="flex justify-center">
            <div className="group relative w-72 md:w-96">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-2xl md:h-[28rem] md:w-96">
                <Image
                  src="/woman.png" // kendi görselini buraya koy
                  alt="Bağnu Çorakçı"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* küçük imza rozeti */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg ring-1 ring-black/5 backdrop-blur">
                kalbimle sarıldım
              </div>
            </div>
          </div>

          {/* sağ: metin + mini istat kartları + CTA */}
          <article className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Merhaba, ben{" "}
              <span className="font-semibold text-gray-900">Bağnu Çorakçı</span>.
              2012’de ThetaHealing® ile tanışmam hayatımda kırılma yarattı. Çocukluk
              travmama bağlı topluluk önünde konuşma korkumu dönüştürdüm; bugün aynı
              şifayı başkalarının da keşfetmesine rehberlik ediyorum.
            </p>

            <p>
              Hacettepe Üniversitesi’nde lisans; ardından davranış bilimleri alanında
              yüksek lisans… Aile Dizimi, Kuantum Yaşam Koçluğu, NLP (Richard Bandler),
              Nefes, Reiki, Hipnoz, Adler Master Koçluk ve Merkaba eğitimleriyle hem
              uygulayıcı hem eğitmen olarak ilerliyorum.
            </p>

            <p>
              Bireysel seanslar, seminerler ve eğitimlerle insanların içlerindeki
              gücü hatırlamalarına, kalıcı dönüşümler ve daha dingin bir yaşam
              kurmalarına eşlik ediyorum.
            </p>

            {/* mini istat/kanıt kartları */}
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur">
                <div className="text-xl font-bold text-gray-900">2012</div>
                <div className="text-xs text-gray-500">Yolculuk başlangıcı</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur">
                <div className="text-xl font-bold text-gray-900">ThetaHealing®</div>
                <div className="text-xs text-gray-500">Master & Science</div>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 text-center shadow ring-1 ring-black/5 backdrop-blur sm:col-span-1 col-span-2">
                <div className="text-xl font-bold text-gray-900">Seminerler</div>
                <div className="text-xs text-gray-500">derin & uygulanabilir</div>
              </div>
            </div>

            {/* alıntı bloğu */}
            <blockquote className="relative mt-4 rounded-2xl border border-purple-200/60 bg-gradient-to-r from-purple-50 to-pink-50 p-5 text-sm text-gray-700">
              <span className="absolute -left-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-purple-500 ring-1 ring-purple-200">
                “
              </span>
              Kendine dokunduğun her an, dünyaya ışık saçarsın.
            </blockquote>

            {/* CTA butonları */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/list?cat=danışmanlık"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
              >
                Seans Al
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/seminerler"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 px-6 py-3 font-semibold text-gray-800 shadow ring-1 ring-black/10 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400/60"
              >
                Eğitimlerim
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
