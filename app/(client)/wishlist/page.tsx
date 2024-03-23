import Container from "@/components/Container";
import Title from "../../components/Title";
import { redirect } from "next/navigation";
import { getAuth } from "../../api/auth/[...nextauth]/route";
import WishlistContainer from "./WishlistContainer";
import ProductContainer from "./ProductContainer";
import { Suspense } from "react";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default async function WishlistPage() {
  const session = await getAuth();

  if (!session || !session?.user) {
    redirect("/signin");
  }

  return (
    <div className="py-12">
      <Container>
        <section>
          <Suspense fallback={<ProductsSkeleton />}>
            <WishlistContainer />
          </Suspense>
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <Title title="Just for you" />
              <button className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem] button-hover">
                See All
              </button>
            </div>

            <Suspense fallback={<ProductsSkeleton />}>
              <ProductContainer />
            </Suspense>
          </div>
        </section>
      </Container>
    </div>
  );
}
