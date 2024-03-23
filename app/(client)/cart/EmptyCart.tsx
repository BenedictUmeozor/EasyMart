"use client";

import image from "@/assets/empty-cart.png";
import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="text-center">
      <div className="grid place-items-center mb-8">
        <Image
          src={image}
          alt="empty cart"
          height={100}
          width={100}
          className="w-14"
        />
      </div>
      <h2 className="text-3xl mb-8">Your Cart is empty</h2>
      <p className="mb-16">Checkout our products to see which ones you like!</p>
      <Link
        href="/products"
        className="bg-crimson px-6 py-2 text-[0.9rem] text-white rounded button-hover "
      >
        Go shopping
      </Link>
    </div>
  );
}
