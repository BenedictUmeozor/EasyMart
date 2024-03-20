import Container from "@/components/Container";
import Images from "./Images";
import { Rating } from "@smastrom/react-rating";
import { Minus, Plus } from "react-feather";
import { Product } from "@/types/types";

const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
};

export default async function PageContainer({ id }: { id: string }) {
  const product: Product = await getProduct(id);

  return (
    <Container className="grid grid-cols-5 gap-10 items-center">
      <div className="col-span-3">
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
        <div className="mt-8">
          <div className="flex items-center gap-4">
            <p>Quantity:</p>
            <div className="inline-flex items-center border border-[#ccc] rounded">
              <button className="w-12 flex items-center justify-center p-2 border-r border-r-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75">
                <Minus className="w-4" />
              </button>
              <p className="w-24 text-center p-2">1</p>
              <button className="w-12 flex items-center justify-center p-2 border-l border-l-[#ccc] hover:scale-100 hover:bg-crimson hover:text-white duration-75">
                <Plus className="w-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className="flex-1 py-3 rounded text-[0.9rem] bg-transparent border border-[#ccc]">
              Add to cart
            </button>
            <button className="flex-1 py-3 rounded text-[0.9rem] bg-crimson text-white">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
