"use client";

import { useCartContext } from "@/context/CartProvider";
import { memo, useEffect, useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { arraysAreEqual } from "@/utils/functions";
import toast from "react-hot-toast";
import { CartItem as CartItemType } from "@/types/types";

const CartTable = memo(() => {
  const { cart, updateCart } = useCartContext();
  const [cartList, setCartList] = useState(cart);

  const editCart = (product: CartItemType) => {
    const newCart = cartList.map((c) => {
      if (c.id === product.id) {
        return product;
      }
      return c;
    });
    setCartList(newCart);
  };

  const updateGlobalCart = () => {
    if (!arraysAreEqual(cart, cartList)) {
      updateCart(cartList);
      setCartList([...cartList]);
      toast.success("Cart updated");
    }
  };

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  return (
    <>
      <h2 className="md:hidden text-center mb-4 text-xl">
        Cart ({cart.length})
      </h2>
      <table className="w-full max-md:border-collapse">
        <thead className="hidden md:block">
          <tr className="flex flex-col md:grid grid-cols-6 gap-2 text-left mb-4 shadow-sm rounded py-4 px-4 md:items-center">
            <th className="font-normal col-span-2">Product</th>
            <th className="font-normal">Price</th>
            <th className="font-normal col-span-2">Quantity</th>
            <th className="font-normal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="block">
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} editCart={editCart} />
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/products"
          className="border border-[#333] py-2 px-4 hover:scale-95"
        >
          Continue Shopping
        </Link>
        <button
          className="border border-[#333] py-2 px-4"
          onClick={updateGlobalCart}
        >
          Update Cart
        </button>
      </div>

      <p
        className={
          "my-4 text-[0.9rem] text-center text-yellow-500 " +
          (!arraysAreEqual(cart, cartList) ? "visible" : "invisible")
        }
      >
        Update cart before proceeding to make payment
      </p>
    </>
  );
});

CartTable.displayName = "CartTable";
export default CartTable;
