"use client";

import Container from "@/components/Container";
import { Product, ProductList } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Products from "../components/Products";
import Link from "next/link";
import { Pagination } from "@mui/material";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [total, setTotal] = useState(0);

  const term = searchParams.get("s");
  const page = searchParams.get("page");

  const router = useRouter();

  const getProducts = async () => {
    let url = `https://dummyjson.com/products/search?q=${term}`;

    if (!term) {
      return router.push("/products");
    }

    if (page) {
      url = `${url}&limit=20&skip=${Number(page) - 1}`;
    }

    const productList: ProductList = await fetch(url, {
      cache: "no-store",
    }).then((res) => res.json());

    setTotal(productList.total);
    setProducts(productList.products);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    router.push(`/search?s=${term}&page=${value}`);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, page]);

  return (
    <section className="py-12">
      {products === null && <ProductsSkeleton />}
      {products && products.length > 0 && (
        <Container>
          <h2 className="text-xl font-semibold mb-8">
            Search results for{" "}
            <span className="italic text-crimson">{term}</span>{" "}
            <span className="text-gray-400 text-base">({total})</span>
          </h2>
          <div className="mt-12">
            <Products products={products} />
          </div>
          {total > 20 && (
            <div className="mt-10 grid place-items-center">
              <Pagination
                count={Number(total) / 20}
                defaultPage={1}
                onChange={handlePageChange}
              />
            </div>
          )}
        </Container>
      )}
      {products && products.length === 0 && (
        <Container className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl mb-8">
              No results for <span>{term}</span>
            </h2>
            <p className="mb-16">Check our other products</p>
            <Link
              href="/products"
              className="bg-crimson px-6 py-2 text-[0.9rem] text-white rounded hover:scale-95"
            >
              See products
            </Link>
          </div>
        </Container>
      )}
    </section>
  );
}
