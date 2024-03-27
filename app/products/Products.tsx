"use client";

import { Product as ProductType } from "@/types/types";
import Product from "../components/Product";

type Props = {
  products: ProductType[];
};

export default function Products({ products }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4" style={{ rowGap: "2rem" }}>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      {!products && "products"}
    </div>
  );
}
