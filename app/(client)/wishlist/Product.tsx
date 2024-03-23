"use client";

import AddToCartButton from "@/app/components/AddToCartButton";
import { UserWishlist } from "@/types/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { memo, useState } from "react";
import { ShoppingCart, Trash2 } from "react-feather";

type Props = {
  wishlist: UserWishlist;
  onDelete: (id: string) => Promise<void>;
};

const Product = memo(({ wishlist, onDelete }: Props) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const deleteWishlist = async () => {
    try {
      await onDelete(wishlist._id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[300px] flex flex-col rounded-md  shadow-lg">
      <div className="relative h-[70%] w-full bg-secondary flex items-center justify-center overflow-hidden">
        <Image
          src={wishlist.thumbnail}
          alt={wishlist.title}
          height={200}
          width={200}
          className="w-full h-full duration-700 hover:scale-105"
        />
        <AddToCartButton product={wishlist} />
        <div className="absolute top-0 left-0 w-full bg-transparent z-[2] flex items-center justify-between p-2">
          <div className="flex items-center justify-center rounded text-white bg-crimson px-2 py-1 text-xs">
            {Math.ceil(wishlist.discountPercentage) + "%"}
          </div>
          {session?.user && (
            <div
              className={
                "bg-white h-6 w-6 cursor-pointer rounded-[50%] flex items-center justify-center " +
                (loading ? "pointer-events-none" : "")
              }
              onClick={deleteWishlist}
            >
              <Trash2 className="w-4 text transition-all duration-300 ease-linear hover:scale-105 hover:text-crimson" />
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[30%] p-1">
        <h4 className="text-base ">{wishlist.title}</h4>
        <div className="text-[0.9rem] font-semibold flex items-center gap-2 mb-1">
          <span className=" text-hover_red">${wishlist.price}</span>{" "}
          <span className="text-[#aaa]">
            {" "}
            $
            {(wishlist.price / (1 - wishlist.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </div>
      </div>
    </div>
  );
});

Product.displayName = "Product";

export default Product;
