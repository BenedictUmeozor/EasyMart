"use client";

import { useCartContext } from "@/context/CartProvider";
import Link from "next/link";
import { ShoppingCart } from "react-feather";

export default function CartLink() {
  const { cart } = useCartContext();

  return (
    <Link href="/cart" title="cart" className="block relative">
      <div className="text-[0.6rem] absolute bg-crimson text-white grid place-items-center rounded-[50%] h-4 w-4 -top-1 -right-1">
        {cart.length}
      </div>
      <ShoppingCart className="w-5 cursor-pointer" />
    </Link>
  );
}
