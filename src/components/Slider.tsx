"use client"

import { useEffect, useState } from "react";
import  Link  from 'next/link';
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "El Dokuması Zarafet",
    description: "Her ilmeğinde ustalık, her deseninde hikaye taşıyan halılar.",
    img: "/mert1.jpg",
    url: "/list",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Kişiye Özel Tasarımlar",
    description: "Evinizin tarzına ve ruhuna özel tasarlanmış halılarla fark yaratın.",
    img: "/mert3.jpg",
    url: "/list",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Zamana Meydan Okuyan Kalite",
    description: "Geleneksel dokuma teknikleriyle modern yaşam alanlarına estetik dokunuş.",
    img: "/mert2.jpg",
    url: "/list",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];


const Slider = () => {
  const [current, setCurrent] = useState(0)

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) // 4 saniyede bir kaydır

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* SLIDES */}
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  Ürünlere Göz At!!
                </button>
              </Link>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image src={slide.img} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex -translate-x-1/2">
        {slides.map((_, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center transition-transform ${
              current === index ? "scale-150" : ""
            }`}
            key={index}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider