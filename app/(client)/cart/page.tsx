"use client"

import CartSkeleton from "@/components/CartSkeleton";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, X } from "react-feather";

export default function Cart() {
  return (
    <div className="py-12">
      <Container>
        {/* <CartSkeleton /> */}
        <table className="w-full">
          <tr className="grid grid-cols-4 gap-2 text-left mb-4 shadow-sm rounded py-4 px-4 items-center">
            <th className="font-normal">Product</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Quantity</th>
            <th className="font-normal">Subtotal</th>
          </tr>
          <tr className="grid grid-cols-4 gap-2 mb-6 shadow-sm rounded py-4 px-4 items-center">
            <td className="flex items-center gap-2">
              <span className="block relative">
                <Image
                  src={
                    "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
                  }
                  alt="cart"
                  height={100}
                  width={100}
                  className="w-10"
                />
                <span className=" absolute top-[-10%] left-[-5%] h-5 w-5 rounded-[50%] bg-crimson text-white flex items-center justify-center">
                  <X className="w-3 cursor-pointer" />
                </span>
              </span>
              <p>Perfume oil</p>
            </td>
            <td className="font-semibold">$650</td>
            <td>
              <span className="inline-flex items-center gap-2 px-3 rounded border border-[#bbb]">
                <span>1</span>
                <span className="flex flex-col items-center">
                  <ChevronUp className="w-3 cursor-pointer" />
                  <ChevronDown className="w-3 cursor-pointer" />
                </span>
              </span>
            </td>
            <td className="font-semibold">$650</td>
          </tr>
          <tr className="grid grid-cols-4 gap-2 mb-6 shadow-sm rounded py-4 px-4 items-center">
            <td className="flex items-center gap-2">
              <Image
                src={
                  "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
                }
                alt="cart"
                height={100}
                width={100}
                className="w-10"
              />
              <p>Perfume oil</p>
            </td>
            <td className="font-semibold">$650</td>
            <td>
              <span className="inline-flex items-center gap-2 px-3 rounded border border-[#bbb]">
                <span>1</span>
                <span className="flex flex-col items-center">
                  <ChevronUp className="w-3 cursor-pointer" />
                  <ChevronDown className="w-3 cursor-pointer" />
                </span>
              </span>
            </td>
            <td className="font-semibold">$650</td>
          </tr>
        </table>
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/products"
            className="border border-[#333] py-2 px-4 hover:scale-95"
          >
            Continue Shopping
          </Link>
          <button className="border border-[#333] py-2 px-4">
            Update Cart
          </button>
        </div>
        <div className="mt-8 border-2 rounded border-[#ccc] p-4 max-w-sm">
          <h2 className="font-semibold text-xl mb-4">Cart Total</h2>
          <div className="pb-2 border-b border-b-[#ccc] flex items-center justify-between mb-4">
            <span>Subtotal:</span>
            <span>$1300</span>
          </div>
          <div className="pb-2 border-b border-b-[#ccc] flex items-center justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="pb-2  flex items-center justify-between mb-4">
            <span>Total:</span>
            <span>$1300</span>
          </div>
          <div className="text-center">
            <button className="w-[80%] max-w-60 bg-crimson text-white rounded py-2 text-center mx-auto">
              Pay with Stripe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
