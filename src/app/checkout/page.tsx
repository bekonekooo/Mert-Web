"use client";

import * as React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import { useCartStore } from "@/hooks/useCartStore";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function Page() {
    const { cart } = useCartStore(); // ✅ SADECE BU EK
  const amount = Number((cart as any)?.subtotal?.amount ?? 0); // ✅ 59.99 yerine
  const [clientSecret, setClientSecret] = React.useState<string>("");

  React.useEffect(() => {
    const minor = Math.round(amount * 100); // 59.99 -> 5999 kuruş
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: minor }),
    })
      .then((r) => r.json())
      .then((d) => setClientSecret(d.clientSecret))
      .catch(console.error);
  }, [amount]);

  if (!clientSecret) return <div>Ödeme hazırlanıyor…</div>;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: { theme: "stripe" },
      }}
      /** clientSecret değiştiğinde Elements'i yeniden kurmak için: */
      key={clientSecret}
    >
      <CheckoutPage amount={amount} />
    </Elements>
  );
}
