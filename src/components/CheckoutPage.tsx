"use client";

import * as React from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setErrorMessage(undefined);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Ödeme başarılı ise yönlendirme
      window.location.href = `/payment-success?amount=${amount}`;
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md transition-colors ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "İşleniyor…" : `${amount}₺ Öde`}
      </button>
      {errorMessage && <p style={{ color: "crimson" }}>{errorMessage}</p>}
    </form>
  );
};

export default CheckoutPage;
