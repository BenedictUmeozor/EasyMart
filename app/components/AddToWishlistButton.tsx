"use client";

import { Product, WishlistItem } from "@/types/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Heart } from "react-feather";
import toast from "react-hot-toast";

type Props = {
  product: Product;
};

export default function AddToWishlistButton({ product }: Props) {
  const { data: session } = useSession();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const checkWishList = (array: WishlistItem[]) => {
    const isPresent = array.some((p) => p.id == product.id);
    setIsInWishlist(isPresent);
  };

  const addToWishlist = async () => {
    if (!wishlist.some((p) => p.id === product.id)) {
      try {
        if (!session?.user) {
          return toast.error("Wait for authentication");
        }

        const res = await fetch("/api/wishlist/new", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ product, user_id: (session?.user as any).id }),
        });

        const data: { wishlist: WishlistItem[] } = await res.json();

        checkWishList(data.wishlist);
        setWishlist(data.wishlist);
        return toast.success("Added to wishlist");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      try {
        const wishlistToDelete = wishlist.find((w) => w.id === product.id);
        if (!session?.user) {
          return toast.error("Wait for authentication");
        }

        const res = await fetch(`/api/wishlist/${wishlistToDelete?._id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
          body: JSON.stringify({ user_id: (session?.user as any).id }),
        });

        if (res.ok) {
          const newList = wishlist.filter(
            (w) => w._id !== wishlistToDelete?._id
          );
          checkWishList(newList);
          setWishlist(newList);
          toast.success("removed from wishlist");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (
        session &&
        session.user &&
        (session.user as any).wishlist &&
        wishlist.length === 0
      ) {
        setWishlist((session.user as any).wishlist);
      }
    })();
  }, [session, wishlist]);

  useEffect(() => {
    if (wishlist && wishlist.length && product.id) {
      checkWishList(wishlist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlist, product.id]);

  return (
    <div
      className="bg-white h-6 w-6 cursor-pointer rounded-[50%] flex items-center justify-center"
      onClick={addToWishlist}
    >
      <Heart
        className={
          "w-4 text transition-all duration-300 ease-linear hover:scale-105 " +
          (isInWishlist ? "text-crimson fill-crimson" : "")
        }
      />
    </div>
  );
}
