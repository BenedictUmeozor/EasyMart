"use client";

import { useCartContext } from "@/context/CartProvider";
import { CartItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Minus, Plus, X } from "react-feather";
import toast from "react-hot-toast";

type Props = { item: CartItem; editCart: (product: CartItem) => void };

const CartItem = memo(({ item, editCart }: Props) => {
  const { deleteFromCart } = useCartContext();

  const deleteCartItem = () => {
    deleteFromCart(item.id);
    toast.success("removed from cart");
  };

  const reduceQuantity = () => {
    if (item.quantity > 1) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
        subTotal: item.subTotal - item.price,
      };
      editCart(updatedItem);
    }
  };

  const increaseQuantity = () => {
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
      subTotal: item.subTotal + item.price,
    };
    editCart(updatedItem);
  };

  return (
    <tr className="flex flex-col md:grid grid-cols-6 gap-4 md:gap-2 mb-6 shadow-sm rounded py-4 px-4 md:items-center">
      <td className="flex items-center gap-2 col-span-2">
        <span className="block relative">
          <Image
            src={item.product_image}
            alt={item.product_title}
            height={100}
            width={100}
            className="w-10"
          />
          <span
            className=" absolute top-[-10%] left-[-5%] h-5 w-5 rounded-[50%] bg-crimson text-white flex items-center justify-center"
            onClick={deleteCartItem}
          >
            <X className="w-3 cursor-pointer" />
          </span>
        </span>
        <Link href={`/products/${item.product_id}`}>
          {item.product_title.length > 50
            ? item.product_title.substring(0, 50) + "..."
            : item.product_title}
        </Link>
      </td>
      <td className="font-semibold">${item.price}</td>
      <td className="col-span-2">
        <span className="inline-flex items-center border border-[#ccc] rounded">
          <button
            className="w-12 flex items-center justify-center p-2 border-r border-r-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75"
            onClick={reduceQuantity}
          >
            <Minus className="w-4" />
          </button>
          <p className="w-24 text-center p-2">{item.quantity}</p>
          <button
            className="w-12 flex items-center justify-center p-2 border-l border-l-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75"
            onClick={increaseQuantity}
          >
            <Plus className="w-4" />
          </button>
        </span>
      </td>
      <td className="font-semibold">${item.subTotal}</td>
    </tr>
  );
});

CartItem.displayName = "CartItem";

export default CartItem;
