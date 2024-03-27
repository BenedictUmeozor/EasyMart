"use client";

import { useCartContext } from "@/context/CartProvider";
import { CartItem, Product } from "@/types/types";
import { ShoppingCart } from "react-feather";
import toast from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    const cartItem: CartItem = {
      id: uuidV4(),
      price: Number(product.price),
      product_title: product.title,
      product_id: String(product.id),
      product_image: product.thumbnail,
      quantity: 1,
      subTotal: Number(product.price),
    };

    addToCart(cartItem);
    toast.success("Added to cart");
  };

  return (
    <button
      className="absolute bottom-0 left-0 w-full bg-black text-white p-2 text-[0.9rem] flex items-center justify-center gap-2 hover:scale-100 z-10"
      onClick={addProductToCart}
    >
      <ShoppingCart className="w-4 " />
      Add to cart
    </button>
  );
}
