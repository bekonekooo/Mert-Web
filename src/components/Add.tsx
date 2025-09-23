"use client"

import React, { useState } from 'react'
import { useWixClient } from '@/hooks/useWixClient';
import { useCartStore } from '@/hooks/useCartStore';

const Add = ({productId,variantId,stockNumber}:{
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {


  const [quantity, setQuantity] = useState(1);

  //       // // TEMPORARY
  //  const stock = 4;

   const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const {addItem,isLoading} = useCartStore();
    
return (
  <div className="flex flex-col gap-4">
    <h4 className="font-medium">Miktar</h4>
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
          <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")} >-</button>
          {quantity}
          <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("i")} >+</button>
        </div>
       { stockNumber < 1 ? (
        <div className='text-xs'> Ürünün Stoğu bitti</div>

       ) : (<div className="text-xs">
          <span className="text-orange-500">{stockNumber}</span> Adet <br />
          Kaçırma
        </div>)}

      </div>
      
        <button 
        onClick={()=> addItem(wixClient,productId,variantId,quantity)}
        disabled={isLoading }
          className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white
              disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none disabled:ring-0"
        >
          Karta Ekle
        </button>
    </div>
  </div>
);

}

export default Add