"use client";

import { useCartContext } from "@/context/CartProvider";
import { CartItem } from "@/types/types";
import { memo, useMemo } from "react";

const calculateTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (total, currentItem) => total + currentItem.subTotal,
    0
  );
};

const CartSummary = memo(() => {
  const { cart } = useCartContext();

  const total = useMemo(() => calculateTotal(cart), [cart]);

  return (
    <div className="mt-8 border-2 rounded border-[#ccc] p-4 max-w-sm">
      <h2 className="font-semibold text-xl mb-4">Cart Total</h2>
      <div className="pb-2 border-b border-b-[#ccc] flex items-center justify-between mb-4">
        <span>Subtotal:</span>
        <span>${total}</span>
      </div>
      <div className="pb-2 border-b border-b-[#ccc] flex items-center justify-between mb-4">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="pb-2  flex items-center justify-between mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <div className="text-center">
        <button className="w-[80%] max-w-60 bg-crimson text-white rounded py-2 text-center mx-auto">
          Pay with Stripe
        </button>
      </div>
    </div>
  );
});

CartSummary.displayName = "CartSummary";

export default CartSummary;
