import Link from 'next/link'
import React from 'react'
import Menu from "./Menu"
import Image from 'next/image'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'

// import NavIcons from "./NavIcons"

const NavIcons = dynamic(()=> import("./NavIcons"),{ssr:false})

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
  {/* MOBİLE */}
        <div className='h-full flex items-center justify-between md:hidden'>     
        <Link href="/">
          <Image src="/bagnuSOnLogo.png" alt='' width={160} height={24}/>
            <div className='text-2xl tracking-wide'> </div>
            </Link>   
        <Menu/>
        </div>
        {/* BIGGER SCRREENS */}
        <div className='hidden md:flex items-center h-full justify-between gap-8'>
            {/* LEFT */}
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                 <Link href="/" className='flex items-center gap-3'>
                 <Image src="/bagnuSOnLogo.png" alt='' width={160} height={24}/>
            <div className='text-2xl tracking-wide'> </div>
            </Link>   
            <div className='hidden xl:flex gap-4 '>
                 <Link href="/" >AnaSayfa</Link>
                    <Link href="/list" >Seminerler</Link>
                    {/* <Link href="/" >Deals</Link> */}
                    <Link href="/about" >Hakkımızda</Link>
                    <Link href="/contact" >İletişim</Link>
            </div>
            </div>
            {/* RIGHT */}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                <SearchBar/>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar