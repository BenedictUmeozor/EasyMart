import Container from "@/components/Container";
import Title from "./Title";
import Products from "./Products";
import { ProductList } from "@/types/types";
import Link from "next/link";

type Props = {
  title: string;
};

const getProducts = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  return res.json();
};

export default async function SingleCategory({ title }: Props) {
  const { products }: ProductList = await getProducts(title);

  return (
    <div className="mb-12">
      <Container>
        <Title title={title.replace("-", " ")} />
        <div className="mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="tracking-wide text-2xl capitalize">
              Explore {title.replace("-", " ")}
            </h2>
            <Link
              href={"/categories/" + title}
              className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]"
            >
              View All
            </Link>
          </div>
          <Products products={products} />
        </div>
      </Container>
    </div>
  );
}
