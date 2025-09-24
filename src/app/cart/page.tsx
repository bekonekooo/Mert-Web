"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

export default function CartPage() {
  const wixClient = useWixClient();
  const { cart, isLoading, getCart, removeItem } = useCartStore();
  const [estimating, setEstimating] = useState(false);
  const [estTotals, setEstTotals] = useState<{
    subtotal?: number;
    total?: number;
    shipping?: number;
    tax?: number;
    price?:number;
  }>({});

  // Cart'ı yükle
  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // helpers (dosyanın üstüne ekleyebilirsin)
const toNum = (v: unknown, fb = 0) => {
  const n =
    typeof v === "string" ? parseFloat(v) :
    typeof v === "number" ? v :
    NaN;
  return Number.isFinite(n) ? n : fb;
};


  // Fallback subtotal (vergisiz, kargosuz)
 const fallbackSubtotal = useMemo(
  () =>
    (cart?.lineItems ?? []).reduce((sum, li) => {
      const price = toNum(li.price?.amount, 0); // <-- kesin number
      const qty   = toNum(li.quantity, 1);      // <-- kesin number
      return sum + price * qty;
    }, 0),
  [cart]
);
  // Resmi toplam tahmini (varsa vergi/kargo/indirim dahil)
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!cart) return;
      setEstimating(true);
      try {
        const res: any = await wixClient.currentCart.estimateCurrentCartTotals(
          {}
        );
        if (!alive) return;
        setEstTotals({
          subtotal: res?.totals?.subtotal?.amount,
          total: res?.totals?.total?.amount,
          shipping: res?.totals?.shipping?.amount,
          tax: res?.totals?.tax?.amount,
        });
      } catch {
        // sessizce fallback'e bırak
      } finally {
        if (alive) setEstimating(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [wixClient, cart?._id]);

  const handleCheckout = async () => {
    try {
      const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart(
        { channelType: currentCart.ChannelType.WEB }
      );
      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId! },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });
      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (e) {
      // istersen toast ekleyebilirsin
      console.error(e);
    }
  };

  const hasItems = (cart?.lineItems?.length ?? 0) > 0;

  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {!hasItems ? (
        <div className="rounded-md border p-6 text-center">
          <p className="text-gray-600">Sepetiniz boş.</p>
          <Link
            href="/list"
            className="inline-block mt-4 rounded-md bg-black text-white px-4 py-2"
          >
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <section className="lg:col-span-2">
            <ul className="divide-y">
              {cart!.lineItems!.map((item) => (
                <li key={item._id} className="py-5 flex gap-4">
                  {item.image && (
                    <Image
                      src={wixMedia.getScaledToFillImageUrl(
                        item.image,
                        96,
                        120,
                        {}
                      )}
                      alt={item.productName?.original ?? ""}
                      width={96}
                      height={120}
                      className="rounded-md object-cover"
                    />
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold">
                          {item.productName?.original}
                        </h3>
                        <div className="p-1 bg-gray-50 rounded-sm">
                          {item.quantity && item.quantity > 1 && (
                            <span className="text-sm text-green-600 mr-1">
                              {item.quantity} ×
                            </span>
                          )}
                          <span className="font-medium">
                            {item.price?.amount}{" "}
                            <span className="text-gray-500 text-xs">TRY</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.availability?.status}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-3">
                      <span className="text-gray-500">
                        Qty. {item.quantity ?? 1}
                      </span>
                      <button
                        className="text-blue-600 hover:underline disabled:opacity-60"
                        disabled={isLoading}
                        onClick={() => item._id && removeItem(wixClient, item._id)}
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/list"
                className="text-sm text-blue-600 hover:underline"
              >
                ← Alışverişe devam et
              </Link>
            </div>
          </section>

          {/* Summary */}
          <aside className="lg:col-span-1 border rounded-md p-5 h-max">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Ara Toplam</span>
                <span>
                  {(estTotals.subtotal ?? fallbackSubtotal).toFixed(2)} TL
                </span>
              </div>
              {typeof estTotals.shipping === "number" && (
                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span>{estTotals.shipping.toFixed(2)} TL</span>
                </div>
              )}
              {typeof estTotals.tax === "number" && (
                <div className="flex justify-between">
                  <span>Vergi</span>
                  <span>{estTotals.tax.toFixed(2)} TL</span>
                </div>
              )}
              <div className="border-t pt-2 font-medium flex justify-between">
                <span>Toplam</span>
                <span>
                  {(estTotals.total ?? estTotals.subtotal ?? fallbackSubtotal).toFixed(2)} TL
                </span>
              </div>
              {estimating && (
                <p className="text-xs text-gray-500">Toplamlar hesaplanıyor…</p>
              )}
            </div>

            <button
              className="w-full mt-4 rounded-md bg-black text-white py-3 disabled:opacity-70"
              disabled={isLoading || !hasItems}
              onClick={handleCheckout}
            >
              Ödemeye Geçiş
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
