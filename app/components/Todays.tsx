import Container from "@/components/Container";
import Products from "./Products";
import Title from "./Title";

export default function Todays() {
  return (
    <section className="py-12 pb-16 border-b border-b-[#eee]">
      <Container>
        <Title title="Todays" />
        <div className="  mt-4">
          <h2 className="mb-6 tracking-wide text-2xl">Flash Sales</h2>
          <Products />
          <div className="mt-8 text-center">
            <button className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]">
              View All Products
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
