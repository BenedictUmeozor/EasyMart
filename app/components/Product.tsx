"use client";

import { Product as ProductType } from "@/types/types";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";
import { useSession } from "next-auth/react";
import AddToCartButton from "./AddToCartButton";

export default function Product({ product }: { product: ProductType }) {
  const { data: session } = useSession();

  return (
    <div className="h-[300px] flex flex-col rounded-md  shadow-lg">
      <div className="product-image relative h-[60%] w-full bg-secondary flex items-center justify-center overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={200}
            width={200}
            className="w-full h-full duration-700 hover:scale-105 object-contain"
          />
        </Link>
        <AddToCartButton product={product} />
        <div className="absolute top-0 left-0 w-full bg-transparent z-[2] flex items-center justify-between p-2">
          <div className="flex items-center justify-center rounded text-white bg-crimson px-2 py-1 text-xs">
            {Math.ceil(product.discountPercentage) + "%"}
          </div>
          {session?.user && <AddToWishlistButton product={product} />}
        </div>
      </div>
      <div className="w-full h-[40%] p-1 py-2">
        <Link
          href={`/products/${product.id}`}
          className="text-[0.9rem] block hover:underline"
        >
          {product.title}
        </Link>
        <div className="text-[0.9rem] font-semibold flex items-center gap-2">
          <span className=" text-hover_red">${product.price}</span>{" "}
          <span className="text-[#aaa] line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </div>
        <Rating
          value={product.rating}
          className="max-w-[100px] text-xs"
          readOnly
        />
      </div>
    </div>
  );
}
