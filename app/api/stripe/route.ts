import { CartItem } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const cart: CartItem[] = await req.json();
    // Create Checkout Sessions from body params.

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      submit_type: "pay",
      payment_method_types: ["card"],
      shipping_options: [{ shipping_rate: "shr_1OxU3EP4Fl7HtK3YynxdPPxx" }],
      mode: "payment",
      success_url: `${process.env.NEXT_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_BASE_URL}/cancelled`,
      line_items: cart.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product_title,
              images: [item.product_image],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
    });

    return NextResponse.json({ session }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
