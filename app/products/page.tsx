import Container from "@/components/Container";
import ProductContainer from "./ProductContainer";

export default function ProductsPage() {
  return (
    <div className="py-12">
      <Container>
        <ProductContainer />
      </Container>
    </div>
  );
}
