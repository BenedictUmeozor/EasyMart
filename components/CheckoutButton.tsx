"use client";

import getStripe from "@/libs/stripe";
import { CartItem } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

type Props = {
  cart: CartItem[];
  className: string;
  text?: string;
};

export default function CheckoutButton({ cart, className, text }: Props) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      if (!session?.user) {
        return router.push("/signin");
      }

      const stripe = await getStripe();

      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      if (!res.ok) {
        return toast.error("An error occurred");
      }

      const data = await res.json();

      toast.loading("Redirecting...");

      stripe.redirectToCheckout({ sessionId: data.session.id });
    } catch (error) {
      console.log("error :" + (error as Error).message);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      disabled={loading || cart.length === 0}
      onClick={handleCheckout}
      className={className}
    >
      {loading ? <Spinner /> : text ? text : "Pay with Stripe"}
    </button>
  );
}
