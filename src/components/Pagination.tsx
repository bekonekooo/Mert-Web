"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
    currentPage,
    hasPrev,
    hasNext }:
    {
        currentPage: number;
        hasPrev: boolean,
        hasNext: boolean
    }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();




    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);  
    }
    return (
        <div className="mt-12  flex justify-between gap-4 w-full">
            <button 
            className="rounded-md bg-lama text-white p-2 text-sm w-24  cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200" 
            disabled={!hasPrev}
            onClick={() => createPageUrl(currentPage - 1)}
            >
                Önceki
            </button>
            <button className="rounded-md bg-lama text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
             disabled={!hasNext}
              onClick={() => createPageUrl(currentPage +1)}
             >
                Sıradaki
            </button>
        </div>
    )
}

export default Pagination