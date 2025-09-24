"use client"

import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import CartModel from './CartModel'
import { useWixClient } from '@/hooks/useWixClient'
import Cookies from 'js-cookie'
import { useCartStore } from '@/hooks/useCartStore'


const NavIcons = () => {

    const [isProfileOpen,setIsProfileOpen]= useState(false);
    const [isCartOpen,setIsCartOpen]= useState(false)
    const [isLoading,setIsLoading]= useState(false)

    const router = useRouter();
    const pathName =usePathname();
           
    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn();

    const handleProfile = ()=>{
        if(!isLoggedIn){
            router.push("/login")
        }else{
 setIsProfileOpen((prev)=> !prev)
        }      
    }

    const handleLogOut = async()=>{
        setIsLoading(true)
        Cookies.remove("refreshToken")
        const {logoutUrl} = await wixClient.auth.logout(window.location.href )        
        setIsLoading(false)
        setIsProfileOpen(false)
        router.push(logoutUrl)
    }

     
    
        const {cart,counter,getCart} = useCartStore();
    
        useEffect(() => {
            
            getCart(wixClient);
            },[wixClient,getCart])
    

  return (
    <div className='flex items-center gap-4 xl:gap-6  relative'>
        <Image src="/profile.png" width={22} height={22} alt=' ' className='cursor-pointer'
        onClick={handleProfile}
        />
        {isProfileOpen &&    <div className=' absolute p-4 rounded-md top-12 left-0 text-sm  bg-white shadow-xl shadow-gray-300 z-20  '>

            <Link href="/profile">Profil</Link>
            <div className='mt-2 cursor-pointer' onClick={handleLogOut}>{ isLoading ? "Logout" : "Cıkış"  }</div>

        </div> }
         <Image src="/notification.png" width={22} height={22} alt=' ' className='cursor-pointer'/>

         <div className='relative cursor-pointer'  onClick={()=>setIsCartOpen((prev)=>!prev)}>
          <Image  src="/cart.png" width={22} height={22} alt=' ' className='cursor-pointer'
         />
          <div className='absolute -top-4 -right-4 w-6 bg-[#F35C7A] rounded-full flex text-white text-sm items-center justify-center'>
            {counter}
          </div>
         </div>
         
          {isCartOpen && (
            <CartModel/>
          )}
        
    </div>
  )
}

export default NavIcons