"use client";

import { CartItem } from "@/types/types";
import {
  ReactNode,
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";

type Context = {
  cart: CartItem[];
  addToCart: (product: CartItem, quantity?: number) => void;
  editCart: (product: CartItem) => void;
  deleteFromCart: (id: string) => void;
  updateCart: (cart: CartItem[]) => void;
};

const CartContext = createContext<Context>({
  cart: [],
  addToCart: () => {},
  editCart: () => {},
  deleteFromCart: () => {},
  updateCart: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = memo(({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")!) || [];
    setCart(cartFromStorage);
  }, []);

  const addToCart = (product: CartItem, quantity?: number) => {
    const existInCart = cart.find((c) => c.product_id === product.product_id);
    if (!existInCart) {
      const newCart = [...cart, { ...product }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = cart.map((c) => {
        if (c.product_id === product.product_id) {
          return {
            ...c,
            quantity: c.quantity + (quantity || 1),
            subTotal: c.subTotal + c.price,
          };
        }
        return c;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const editCart = (product: CartItem) => {
    const newCart = cart.map((c) => {
      if (c.id === product.id) {
        return product;
      }
      return c;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteFromCart = (id: string) => {
    const newCart = cart.filter((c) => c.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, editCart, deleteFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
});

CartProvider.displayName = "CartProvider";
