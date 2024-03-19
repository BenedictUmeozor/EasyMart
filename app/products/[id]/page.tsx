import Container from "@/components/Container";
import { Rating } from "@smastrom/react-rating";
import { Minus, Plus } from "react-feather";
import Images from "./Images";

export default function ProductPage() {
  return (
    <div className="py-12">
      <Container className="grid grid-cols-5 gap-10 items-center">
        <div className="col-span-3">
          <Images />
        </div>
        <div className="col-span-2">
          <h3 className="text-xl mb-2">iphone 13</h3>
          <div className="flex items-center gap-2 mb-4">
            <Rating value={4.5} className="max-w-[70px]" readOnly />{" "}
            <span className="text-[#ccc]">|</span>{" "}
            <span className="text-success">in stock</span>
          </div>
          <p className="text-xl mb-8">
            <span>$500</span>{" "}
            <span className="text-gray-300 line-through">$600</span>
          </p>
          <p className="mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ullam sunt velit nesciunt qui. Repellendus amet atque modi delectus
            ex?
          </p>
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
    </div>
  );
}
