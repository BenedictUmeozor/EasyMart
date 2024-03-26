"use client";

import getStripe from "@/libs/stripe";
import { CartItem } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { v4 as uuidV4 } from "uuid";
import { useCartContext } from "@/context/CartProvider";

type Props = {
  cart: CartItem[];
  className: string;
  text?: string;
};

export default function CheckoutButton({ cart, className, text }: Props) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const { deleteAllFromCart } = useCartContext();

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
        throw new Error("An error occurred");
      }

      const data = await res.json();

      const promises = [];

      for (const product of cart) {
        const { product_id, product_image, product_title, quantity, subTotal } =
          product;

        console.log(subTotal);

        promises.push(
          fetch(`/api/orders/new`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_no: uuidV4(),
              product_id,
              product_image,
              product_title,
              quantity,
              total: subTotal,
              user_id: (session.user as any).id,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  "Failed to create order for product " + product_id
                );
              }
              // Handle successful response if needed
            })
            .catch((error) => {
              // Handle errors
              console.error("Error creating order:", error);
            })
        );
      }

      await Promise.all(promises);

      toast.loading("Redirecting...");
      deleteAllFromCart();

      stripe.redirectToCheckout({ sessionId: data.session.id });
    } catch (error) {
      console.error("error :", (error as Error).message);
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
