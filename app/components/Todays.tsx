import Container from "@/components/Container";
import Title from "./Title";
import TodaysProduct from "./TodaysProduct";
import { Suspense } from "react";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default function Todays() {
  return (
    <section className="py-12 pb-16 border-b border-b-[#eee]">
      <Container>
        <Title title="Todays" />
        <Suspense fallback={<ProductsSkeleton />}>
          <TodaysProduct />
        </Suspense>
      </Container>
    </section>
  );
}
