import Link from "next/link";
import Products from "./Products";
import { ProductList } from "@/types/types";

const getProducts = async () => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=5&skip=${Math.floor(
      Math.random() * 90
    )}`,
    { cache: "no-store" }
  );

  return res.json();
};

export default async function TodaysProduct() {
  const productList: ProductList = await getProducts();

  return (
    <div className="  mt-4">
      <h2 className="mb-6 tracking-wide text-2xl">Flash Sales</h2>
      <Products products={productList.products} />
      <div className="mt-8 text-center">
        <Link
          href="/products"
          className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
