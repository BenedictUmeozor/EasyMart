import { UserWishlist } from "@/types/types";
import Wishlist from "./Wishlist";
import { getAuth } from "@/config/auth";

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
      <Wishlist wishlists={wishlists} />
    </>
  );
}
