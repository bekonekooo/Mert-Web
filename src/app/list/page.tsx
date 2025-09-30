import React, { Suspense } from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";

const ListPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

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
  <div className="hidden bg-pink-50 px-4 sm:flex flex-col sm:flex-row justify-between h-64 sm:h-64 lg:h-72 text-center">
    <div className="w-full sm:w-2/3 flex flex-col items-center sm:items-start justify-center gap-4 sm:gap-8 text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl font-semibold leading-[36px] sm:leading-[48px] text-gray-700 text-center">
        Kişisel Gelişim 
        <br />
       Yolculuğunuza Başlayın
      </h1>
      
    </div>
    <div className="relative w-full sm:w-1/3 h-40 sm:h-full mt-4 sm:mt-0">
      <Image
        src="/bagnu2.jpeg"
        alt="Kişisel Gelişim Semineri"
        fill
        className="object-contain"
      />
    </div>
  </div>

  <Filter infoTitles={infoTitles} />

  <Suspense fallback={"Yükleniyor..."}>
    <ProductList
      categoryId={cat.collection?._id || "00000000-0000-0000-0000-000000000001"}
      searchParams={searchParams}
      limit={100}        
    />
  </Suspense>
</div>

  );
};

export default ListPage;