import Container from "@/components/Container";
import CategoryContainer from "./CategoryContainer";
import { Suspense } from "react";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import { TagIcon } from "@heroicons/react/24/solid";

export async function generateStaticParams() {
  const categories: string[] = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());

  return categories.map((category) => ({
    category: category,
  }));
}

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  return (
    <div className="py-12">
      <Container>
        <div className="mb-8 flex items-center gap-2">
          <TagIcon className="w-8 text-crimson" />
          <h2 className="text-3xl font-semibold capitalize">
            {category.replace("-", " ")}
          </h2>
        </div>
        <Suspense fallback={<ProductsSkeleton />}>
          <CategoryContainer category={category} />
        </Suspense>
      </Container>
    </div>
  );
}
