import React from "react";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  // API çağrısı + defansif kontrol
  const catsRes = await wixClient.collections.queryCollections().find();
  const categories: any[] = Array.isArray(catsRes?.items) ? catsRes.items : [];

  // Güvenli çeviri (case-insensitive)
  const displayName = (raw?: string) => {
    const name = (raw || "").trim();
    const norm = name.toLowerCase();

    switch (norm) {
      case "all products":
        return "Bütün Ürünler";
      case "featured":
        return "Sizin için Seçtiklerimiz";
      case "kid":
        return "Çocuk";
      case "man":
        return "Erkek";
      case "optik":
        return "Optik Gözlükler";
      case "sun":
        return "Güneş Gözlükleri";
      default:
        return name || "Kategori";
    }
  };

  return (
    <div className="px-4">
      {/* YATAY SCROLL WRAPPER */}
      <div
        className="
          flex gap-4 overflow-x-auto
          snap-x snap-mandatory
          -mx-4 px-4
        "
        style={{ WebkitOverflowScrolling: "touch" }} // iOS momentum
      >
        {categories.map((item: any) => {
          const href = `/list?cat=${encodeURIComponent(item?.slug || "")}`;
          const imgSrc =
            item?.media?.mainMedia?.image?.url && item.media.mainMedia.image.url.startsWith("http")
              ? item.media.mainMedia.image.url
              : "/cart.png";

          return (
            <Link
              href={href}
              key={item?._id || item?.id || item?.slug}
              className="shrink-0 snap-center min-w-[260px] sm:min-w-[320px] md:min-w-[360px]"
            >
              <div className="relative bg-slate-200 rounded-xl w-full aspect-[4/3]">
                <Image
                  src={imgSrc}
                  alt={displayName(item?.name)}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                  className="object-cover rounded-xl"
                  // Wix 400 hatası görürsen şu satırı aç:
                  // unoptimized
                />
              </div>
              <h1 className="mt-3 text-center font-light text-lg tracking-wide">
                {displayName(item?.name)}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
