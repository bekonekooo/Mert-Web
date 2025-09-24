import React from "react";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

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
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-[400px]">
            {/* Hover efekti için iki resim üst üste */}
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            {product.media?.items?.[1] && (
              <Image
                src={product.media.items[1].image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semi-bold">{product.price?.price}₺</span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.description || "Ürün açıklaması bulunamadı."
                ),
              }}
            />
          )}

          <button className="rounded-2xl ring-1 ring-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Karta Ekle
          </button>
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
