import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (

    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5 '>
          <Link href="/">
            <div className='text-2xl tracking-wide'> OPTİKCE</div>
          </Link>
          <p>Yeşilbahçe Mah. Metin Kasapoğlu Cad. Yorgancıoğlu Apt. A Blok No:27/A Muratpaşa / ANTALYA</p>
          <span className='semi-bold'>dgceken7@outlook.com</span>
          <span className='semi-bold'>0507 213 41 81</span>
          <div className='flex gap-6'>
            <Image src="/facebook.png " alt='' width={16} height={16} />
            <Image src="/instagram.png " alt='' width={16} height={16} />
            <Image src="/youtube.png " alt='' width={16} height={16} />
            <Image src="/pinterest.png " alt='' width={16} height={16} />
            <Image src="/x.png " alt='' width={16} height={16} />
          </div>
        </div>
        {/* CENTER  */}
<div className="flex flex-row flex-wrap justify-center lg:justify-between w-full lg:w-1/2 gap-12 lg:gap-0 text-center lg:text-left">
  <div className="flex flex-col gap-6 items-center lg:items-start mr-20">
    <h1 className="font-medium">Şirket</h1>
    <div className="flex flex-col gap-3 ">
      <Link href="/">AnaSayfa</Link>
      <Link href="/hakkimizda">Hakkımızda</Link>
      <Link href="/urunler">Ürünler</Link>
      <Link href="/iletisim">İletişim</Link>
      <Link href="/mss">MSS</Link>
      <Link href="/kvk">KVK</Link>
    </div>
  </div>

  <div className="flex flex-col gap-6 items-center lg:items-start">
    <h1 className="font-medium">Dükkan</h1>
    <div className="flex flex-col gap-3">
      <Link href="/list?cat=featured">Yeni Gelenler</Link>
      <Link href="/list?cat=woman">Kadın</Link>
      <Link href="/list?cat=kid">Çocuk</Link>
      <Link href="/list?cat=man">Erkek</Link>
      <Link href="/list?cat=all-products">Bütün Ürünler</Link>
    </div>
  </div>
</div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium'>KATILIN</h1>
          <p>Trendlerden ve En Yeni indirimlerden Haberdar olmak için Katıl</p>
          <div className='flex'>
            <input type="text"
              placeholder='Email'
              className='p-4 w-3/4' />
            <button className='w-1/4 bg-lama text-white'>KATIL</button>
          </div>
          <span className='font-semibold'>Güvenilir Ödeme</span>
          <div className='flex justify-between'>

            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />


          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''>© 2025 OPTIKCE</div>
        <div className=' flex flex-col gap-8 md:flex-row'>
          <div className=''>
            <span className='text-gray-500 mr-4'>Dil</span>
            <span className='font-medium'>Türkiye | Türkçe</span>
          </div>

          <div className=''>
            <span className='text-gray-500 mr-4'>Para Birimi</span>
            <span className='font-medium'>₺ TRY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer