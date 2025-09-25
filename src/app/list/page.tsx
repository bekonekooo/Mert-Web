import React, { Suspense } from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  // Kategori (slug yoksa all-products varsayılan)
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  // === additionalInfoSections başlıklarını topla (ilk sayfadan) ===
  // İstersen .hasSome("collectionIds", [cat.collection?._id]) kullanabilirsin.
  const metaRes = await wixClient.products
    .queryProducts()
    .eq("collectionIds", cat.collection?._id || "00000000-0000-0000-0000-000000000001")
    .limit(100)
    .find();

  const infoTitles = Array.from(
    new Set(
      (metaRes.items || []).flatMap((p: any) =>
        (p.additionalInfoSections || [])
          .map((s: any) => (s?.title || "").trim())
          .filter((t: string) => t && t.length > 0)
      )
    )
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Yüzde %50 indirimi Kaçırma
            <br /> Seçilen Ürünler
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Hemen Al
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* >>> Filter'a başlıkları geçiyoruz */}
      <Filter infoTitles={infoTitles} />

      {/* PRODUCTS */}
      {/* <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name || "Products"}
      </h1> */}

      <Suspense fallback={"Yükleniyor..."}>
        <ProductList
          categoryId={cat.collection?._id || "00000000-0000-0000-0000-000000000001"}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
