

import Slider from './../components/Slider';
import ProductList from './../components/ProductList';
import CategoryList from '@/components/CategoryList';
import { Suspense, useContext, useEffect } from 'react';
import { WixClientContext } from '@/context/wixContext';
import { useWixClient } from '@/hooks/useWixClient';
import { wixClientServer } from "@/lib/wixClientServer";



const HomePage = async () => {

  // const wixClient  = useWixClient()

  // useEffect(()=>{

  //   const getProducts = async ()=>{
  //   const res = await wixClient.products.queryProducts().find();

  //    console.log(res)
  // };
  // getProducts();
  // },[wixClient]);
    // const wixClient = await wixClientServer();
    // const res = await wixClient.products.queryProducts().find();

    // console.log(res)
  return (
    <div className=''>
      <Slider/>
      <div className='mt-24  px-4 md:px-8 lg:px-16 px:32 2xl:px-64'>
        <h1 className='text-2xl text-center'></h1>
        <Suspense fallback={"Yükleniyor..."}   >
        <ProductList limit={12} categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}          
         />
        </Suspense>
      </div>
         <div className='mt-24   '>
        <h1 className='text-2xl mt-24  px-4 md:px-8 lg:px-16 px:32 2xl:px-64 mb-12 text-center'>
          Kategoriler
          </h1>
          <Suspense fallback={"Yükleniyor..."}   >
             <CategoryList/>
          </Suspense>
       
      </div>


         <div className='mt-24  px-4 md:px-8 lg:px-16 px:32 2xl:px-64'>
       
      
      </div>
    </div>
  )
}

export default HomePage