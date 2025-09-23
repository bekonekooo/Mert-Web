import React from "react";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

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
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0);

  // Sıralama
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    // Wix'in desteklediği alanlar
    const validFields = ["name", "price", "lastUpdated", "createdDate"];

    if (sortBy && validFields.includes(sortBy)) {
      if (sortType === "asc") {
        productQuery = productQuery.ascending(sortBy);
      } else if (sortType === "desc") {
        productQuery = productQuery.descending(sortBy);
      }
    }
  }

  const res = await productQuery.find();

  // console.log(res); 

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
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
            <span className="font-semi-bold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || "Ürün açıklaması bulunamadı."
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white">
            Karta Ekle
          </button>
        </Link>
      ))}
     { searchParams?.cat || searchParams?.name ?  (<Pagination
       currentPage={res.currentPage || 0 } 
      hasPrev={res.hasPrev()}
       hasNext={res.hasNext()}/>)
       : null 
       }
    </div>
  );
};

export default ProductList;
