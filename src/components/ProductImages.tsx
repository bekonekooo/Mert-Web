"use client";

import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";

const ProductImages = ({ items }: { items?: any[] }) => {
  const list = items ?? [];

  // LOGO (2. görsel = index 1)
  const logoItem = list[1];

  // Ürün görselleri (logo dışındakiler)
  const visibleItems = useMemo(
    () => list.filter((it, i) => i !== 1 && it?.image?.url),
    [list]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [visibleItems.length]);

  const current = visibleItems[index] ?? list[0] ?? null;
  const currentUrl = current?.image?.url || "/product.png";

  return (
    <div>
      {/* Ana büyük ürün görseli */}
      <div className="h-[500px] relative">
        <Image
          src={currentUrl}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      {/* Logo görseli ayrı alan */}
      {logoItem?.image?.url && (
        <div className="flex justify-center mt-4">
          <Image
            src={logoItem.image.url}
            alt="Brand Logo"
            width={240}
            height={50}
            className="object-contain"
          />
        </div>
      )}

      {/* Thumbnail galeri (logo hariç) */}
      <div className="flex justify-between gap-4 mt-8">
        {visibleItems.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative cursor-pointer"
            key={item?._id ?? i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
