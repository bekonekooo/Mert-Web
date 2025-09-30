// src/app/api/create-payment-intent/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json(); // kuruş
    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const pi = await stripe.paymentIntents.create({
      amount,
      currency: "try",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: pi.client_secret });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Internal error" }, { status: 500 });
  }
}
