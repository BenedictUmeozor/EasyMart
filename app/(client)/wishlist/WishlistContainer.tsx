import { UserWishlist } from "@/types/types";
import Wishlist from "./Wishlist";
import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const getWishlist = async (user_id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/${user_id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

export default async function WishlistContainer() {
  const session = await getAuth();

  const user_id = (session?.user as any).id;
  const wishlists: UserWishlist[] = await getWishlist(user_id);
  return (
    <>
      {wishlists.length === 0 && (
        <>
          <header className="flex items-center justify-between mb-8">
            <h2 className="text-xl text-[#333]">
              Wishlist ({wishlists.length})
            </h2>
            {wishlists.length && (
              <button className="border border-[#333] py-2 px-4">
                Move all to cart
              </button>
            )}
          </header>
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
        </>
      )}
      <Wishlist wishlists={wishlists} />
    </>
  );
}
