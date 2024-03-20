import { Suspense } from "react";
import PageContainer from "./PageContainer";
import PageSkeleton from "./PageSkeleton";

function generateNumbersArray() {
  var numbersArray = [];
  for (var i = 1; i <= 100; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

export async function generateStaticParams() {
  const productList = generateNumbersArray();

  return productList.map((product) => ({
    id: String(product),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="py-12">
      {/* <PageSkeleton /> */}
      <Suspense fallback={<PageSkeleton />}>
        <PageContainer id={id} />
      </Suspense>
    </div>
  );
}
