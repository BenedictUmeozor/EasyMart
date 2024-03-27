"use client";

import { UserWishlist } from "@/types/types";
import Product from "./Product";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

type Props = {
  wishlists: UserWishlist[];
};

export default function Wishlist({ wishlists }: Props) {
  const { data: session } = useSession();
  const [lists, setLists] = useState(wishlists);

  const deleteWishlist = async (id: string) => {
    try {
      const res = await fetch(`/api/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: (session?.user as any).id }),
        cache: "no-store",
      });

      if (res.ok) {
        const newList = lists.filter((wishlist) => wishlist._id !== id);
        setLists(newList);
        toast.success("removed from wishlist");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <header className="flex items-center justify-between mb-8">
        <h2 className="text-xl text-[#333]">Wishlist ({lists.length})</h2>
        {lists.length !== 0 && (
          <button className="border border-[#333] py-2 px-4">
            Move all to cart
          </button>
        )}
      </header>
      {lists.length === 0 && (
        <div className="text-center">
          <h2 className="text-3xl mb-8">You have no wishlist</h2>
          <p className="mb-16">
            Checkout our products to see which ones you like!
          </p>
          <Link
            href="/products"
            className="bg-crimson px-6 py-2 text-[0.9rem] text-white rounded button-hover "
          >
            See products
          </Link>
        </div>
      )}
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-4"
        style={{ rowGap: "2rem" }}
      >
        {lists.map((wishlist) => (
          <Product
            key={wishlist._id}
            wishlist={wishlist}
            onDelete={deleteWishlist}
          />
        ))}
      </div>
    </>
  );
}
