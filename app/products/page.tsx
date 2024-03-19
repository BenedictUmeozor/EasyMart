import Container from "@/components/Container";
import Products from "../components/Products";

export default function ProductsPage() {
  return (
    <div className="py-12">
      <Container>
        <h2 className="text-3xl font-semibold mb-8">Products</h2>
        <Products />
      </Container>
    </div>
  );
}
