"use client"
import React from 'react'
import Image from 'next/image';
import { useWixClient } from '@/hooks/useWixClient';
import { currentCart } from '@wix/ecom';
import { useCartStore } from '@/hooks/useCartStore';
import { media as wixMedia } from "@wix/sdk"
import { useRouter } from 'next/navigation'; // ✅ doğru import

const CartModel = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();
  const router = useRouter(); // ✅ router tanımlandı

  const handleCheckout = async () => {
    try {
      const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart({
        channelType: currentCart.ChannelType.WEB,
      })
      const { redirectSession } = await wixClient.redirects.createRedirectSession({
        ecomCheckout: { checkoutId: checkout.checkoutId! },
        callbacks: {
          postFlowUrl: window.location.origin,
          thankYouPageUrl: `${window.location.origin}/success`
        }
      });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 '>
      {!cart?.lineItems ? (
        <div>Sepet Boş</div>
      ) : (
        <>
          <h2 className='text-xl'>SEPET</h2>

          {/* LIST */}
          <div className='flex flex-col gap-8'>
            {cart.lineItems.map(item => (
              <div className='flex gap-4' key={item._id} >
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                    alt=''
                    width={72} height={72}
                    className='object-cover rounded-md'
                  />
                )}
                <div className='flex flex-col justify-between w-full'>
                  {/* TOP */}
                  <div>
                    <div className='flex items-center justify-between gap-8'>
                      <h3 className='font-semibold'>{item.productName?.original}</h3>
                      <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>
                        {item.quantity && item.quantity > 1 && (
                          <span className='text-md text-green-500'>
                            {item.quantity} * x
                          </span>
                        )}
                        TRY {item.price?.amount}
                      </div>
                    </div>
                    <div className='text-sm text-gray-500'>
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className='flex justify-between text-sm'>
                    <span className=' text-gray-500'>Qty.{item.quantity}</span>
                    <span
                      className=' text-blue-500 '
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Kaldır
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NEW BOTTOM */}
          <div>
            <div className='flex items-center justify-between font-semibold'>
              <span>Toplam</span>
              <span>{(cart as any).subtotal?.amount}$</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Kargo ve Vergiler Ödemede hesaplanıcakdır
            </p>
            <div className='flex justify-between text-sm'>
              <button
                className='rounded-md py-3 px-4 ring-1 ring-gray-300'
                onClick={() => router.push("/cart")} // ✅ yönlendirme eklendi
              >
                Sepet
              </button>
              <button
                className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75'
                disabled={isLoading}
                onClick={handleCheckout}
              >
                Ödemeye Geçiş
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModel
