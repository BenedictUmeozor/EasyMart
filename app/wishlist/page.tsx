import Container from "@/components/Container";
import Wishlist from "./Wishlist";
import Title from "../components/Title";
import Products from "../components/Products";
import { redirect } from "next/navigation";
import { getAuth } from "../api/auth/[...nextauth]/route";

export default async function WishlistPage() {
  const session = await getAuth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="py-12">
      <Container>
        <section>
          <header className="flex items-center justify-between mb-8">
            <h2 className="text-xl text-[#333]">Wishlist (5)</h2>
            <button className="border border-[#333] py-2 px-4">
              Move all to cart
            </button>
          </header>
          <Wishlist />
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <Title title="Just for you" />
              <button className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]">
                See All
              </button>
            </div>
            <Products />
          </div>
        </section>
      </Container>
    </div>
  );
}
