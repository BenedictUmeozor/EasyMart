import { Suspense } from "react";
import SingleCategory from "./SingleCategory";
import { categories } from "./data";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import Container from "@/components/Container";

export default function Category() {
  return (
    <section className="py-12 pb-16">
      {categories.map((category) => (
        <Suspense
          key={category}
          fallback={
            <div className="mb-12">
              <Container>
                <ProductsSkeleton />
              </Container>
            </div>
          }
        >
          <SingleCategory key={category} title={category} />
        </Suspense>
      ))}
    </section>
  );
}
