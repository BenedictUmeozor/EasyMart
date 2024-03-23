import Products from "@/app/components/Products";
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

export default async function ProductContainer() {
  const productList: ProductList = await getProducts();

  return <Products products={productList.products} />;
}
