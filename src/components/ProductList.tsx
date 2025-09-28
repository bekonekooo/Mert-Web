import React from "react";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";


const HOME_LIMIT = 12;
const LIST_LIMIT = 100;
const PRODUCT_PER_PAGE = 100;




/* ===========================
   1) HELPERS  (YENİ)
   =========================== */
// HTML etiketlerini temizle + normalize
const stripHtml = (html?: string) =>
  (html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// URL'den info.* filtrelerini topla (örn: info.Cam Rengi=Füme Aynalı)
const collectInfoFilters = (searchParams?: Record<string, any>) => {
  const out: Array<{ title: string; value: string }> = [];
  if (!searchParams) return out;

  for (const [k, v] of Object.entries(searchParams)) {
    if (!k.startsWith("info.")) continue;

    // value string veya string[] olabilir -> string'e indir
    const rawVal =
      typeof v === "string" ? v : Array.isArray(v) ? v[0] ?? "" : "";
    if (!rawVal || rawVal.trim() === "") continue;

    // "info." sonrası başlık
    const title = k.slice(5).trim().toLowerCase();
    out.push({ title, value: rawVal.trim().toLowerCase() });
  }
  return out;
};

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  // Sıralama (mevcut halinle bıraktım)
 if (searchParams?.sort) {
  const [dir, uiField] = String(searchParams.sort).split(" ");

  // 1) Fiyat: SORT'tA price kullan (priceData.price DEĞİL!)
  if (uiField === "price") {
    const field = "price" as const;
    productQuery =
      dir === "desc"
        ? productQuery.descending(field)
        : productQuery.ascending(field);
  }

  // 2) lastUpdated
  else if (uiField === "lastUpdated") {
    const field = "lastUpdated" as const;
    productQuery =
      dir === "desc"
        ? productQuery.descending(field)
        : productQuery.ascending(field);
  }

  // 3) name
  else if (uiField === "name") {
    const field = "name" as const;
    productQuery =
      dir === "desc"
        ? productQuery.descending(field)
        : productQuery.ascending(field);
  }

  // 4) (opsiyonel) createdDate → bazı projelerde _createdDate çalışır, tip için cast gerekebilir
  else if (uiField === "createdDate") {
    const field = "_createdDate" as any;
    productQuery =
      dir === "desc"
        ? productQuery.descending(field)
        : productQuery.ascending(field);
  }
}

  const res = await productQuery.find();


  // console.log("🔎 Products:", res.items);

  /* ===========================
     2) POST-FILTER (YENİ)
     =========================== */
  let items: any[] = res.items || [];

  // URL’deki info.* paramlarını al
  const infoFilters = collectInfoFilters(searchParams);

  // Her info filtresi AND ile uygulanır:
  // title eşleşecek, description (HTML temizlenmiş) içinde value geçecek
  if (infoFilters.length > 0) {
    items = items.filter((p: any) =>
      infoFilters.every(({ title, value }) => {
        const sec = p.additionalInfoSections?.find(
          (s: any) => String(s?.title || "").trim().toLowerCase() === title
        );
        if (!sec) return false;

        const plain = stripHtml(sec.description).toLowerCase();
        return plain.includes(value);
      })
    );
  }

  /* ===========================
     3) RENDER'DA items KULLAN  (DEĞİŞTİ)
     =========================== */

return (
  <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4">
    {items.map((product: products.Product) => (
      <Link
        href={"/" + product.slug}
        key={product._id}
        className="group"
      >
        {/* KART */}
        <div className="h-full flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200">
          
          {/* 1) GÖRSEL BÖLÜMÜ */}
          <div className="relative w-full h-[400px] p-3">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name || "Ürün"}
              fill
              sizes="25vw"
              className="object-contain rounded-md"
            />
          </div>

          <div className="mx-4 h-px bg-gray-200" />

          {/* 2) DETAYLAR */}
          <div className="px-4 py-4 flex flex-col items-center gap-3">
            {product.media?.items?.[1]?.image?.url && (
              <div className="flex justify-center">
                <Image
                  src={product.media.items[1].image.url}
                  alt="Brand Logo"
                  width={400}
                  height={200}
                  className="object-contain"
                />
              </div>
            )}

            <span className="font-medium text-center">{product.name}</span>
{product.price?.discountedPrice &&
 product.price.discountedPrice !== product.price.price ? (
  <div className="flex items-center gap-2">
    <span className="text-gray-500 line-through text-sm">
      {product.price?.price}₺
    </span>
    <span className="font-bold text-lg text-gray-900">
      {product.price?.discountedPrice}₺
    </span>
  </div>
) : (
  <span className="font-semibold">{product.price?.price}₺</span>
)}
          </div>

          <div className="mx-4 h-px bg-gray-200" />

          {/* 3) BUTON */}
          <div className="px-4 py-4 flex justify-center">
            <button className="rounded-2xl ring-1 ring-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white transition-colors">
              Karta Ekle
            </button>
          </div>
        </div>
      </Link>
    ))}

    {(searchParams?.cat || searchParams?.name) && (
      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    )}
  </div>
);
};

export default ProductList;
