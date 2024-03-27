import Container from "@/components/Container";
import Images from "./Images";
import { Rating } from "@smastrom/react-rating";
import { Product } from "@/types/types";
import ClientComponent from "./ClientComponent";

const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
};

export default async function PageContainer({ id }: { id: string }) {
  const product: Product = await getProduct(id);

  return (
    <Container className="md:grid grid-cols-5 gap-10 items-center">
      <div className="col-span-3 max-md:mb-10">
        <Images images={product.images} title={product.title} />
      </div>
      <div className="col-span-2">
        <h3 className="text-xl mb-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <Rating value={4.5} className="max-w-[70px]" readOnly />{" "}
          <span className="text-[#ccc]">|</span>{" "}
          <span className="text-success">
            in stock{" "}
            <span className="text-gray-400 text-xs">({product.stock})</span>
          </span>
        </div>
        <p className="text-xl mb-8">
          <span>${product.price}</span>{" "}
          <span className="text-gray-300 line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </p>
        <p className="mb-8">{product.description}</p>
        <hr />
        <ClientComponent product={product} />
      </div>
    </Container>
  );
}
