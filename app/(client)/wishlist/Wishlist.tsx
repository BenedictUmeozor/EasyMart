import Product from "./Product";

export default function Wishlist() {
  return (
    <div className="grid grid-cols-5 gap-4" style={{ rowGap: "2rem" }}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}