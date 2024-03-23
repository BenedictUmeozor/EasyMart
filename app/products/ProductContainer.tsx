"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Product, ProductList } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@mui/material";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import { shuffleArray } from "@/utils/functions";
import Products from "./Products";

export default function ProductContainer() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");

  const getAllProducts = async () => {
    if (Number(page) > 5 || !page) {
      return router.push("/products?page=1");
    }

    const res = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${Number(page) - 1}`,
      {
        cache: "no-store",
      }
    );
    const data: ProductList = await res.json();
    setProducts(data.products);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    router.push(`/products?page=${value}`);
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <h2 className="text-3xl font-semibold mb-8">
        {" "}
        All Products <span className="text-gray-400 text-base">(100)</span>
      </h2>
      {products && <Products products={shuffleArray(products)} />}
      {!products && <ProductsSkeleton />}
      <div className="mt-10 grid place-items-center">
        <Pagination
          count={100 / 20}
          defaultPage={1}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
