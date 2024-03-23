"use client";

import { useCartContext } from "@/context/CartProvider";
import { CartItem, Product } from "@/types/types";
import { useState } from "react";
import { Minus, Plus } from "react-feather";
import toast from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";

type Props = {
  product: Product;
};

export default function ClientComponent({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartContext();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addProductToCart = () => {
    const cartItemToAdd: CartItem = {
      id: uuidV4(),
      price: Number(product.price),
      product_id: String(product.id),
      product_image: product.thumbnail,
      product_title: product.title,
      quantity: quantity,
      subTotal: quantity * Number(product.price),
    };

    addToCart(cartItemToAdd);
    toast.success("Added to cart");
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <p>Quantity:</p>
        <div className="inline-flex items-center border border-[#ccc] rounded">
          <button
            className="w-12 flex items-center justify-center p-2 border-r border-r-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75"
            onClick={decrement}
          >
            <Minus className="w-4" />
          </button>
          <p className="w-24 text-center p-2">{quantity}</p>
          <button
            className="w-12 flex items-center justify-center p-2 border-l border-l-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75"
            onClick={increment}
          >
            <Plus className="w-4" />
          </button>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <button
          className="flex-1 py-3 rounded text-[0.9rem] bg-transparent border border-[#ccc]"
          onClick={addProductToCart}
        >
          Add to cart
        </button>
        <button className="flex-1 py-3 rounded text-[0.9rem] bg-crimson text-white">
          Buy now
        </button>
      </div>
    </div>
  );
}
