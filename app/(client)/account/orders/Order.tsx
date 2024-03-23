import Image from "next/image";

export default function Order() {
  return (
    <div className="flex flex-row gap-4 mb-4 shadow-sm py-2">
      <div className="flex-[2] flex items-center gap-2">
        <div>
          <Image
            src={"https://cdn.dummyjson.com/product-images/12/1.jpg"}
            alt="image"
            height={200}
            width={100}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <p className="font-semibold">HP Lenovo Laptop</p>
            <p className="text-xs text-gray-600">Order no: #2263632</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Qty: 1</span>
            <span className="font-bold">$500</span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[0.95rem] text-gray-500">Status:</p>
        <p className="text-success text-xl mt-2">Delivered</p>
      </div>

      <div className="flex-1">
        <p className="text-[0.95rem] text-gray-500">Delivered</p>
        <p className="font-bold text-xl mt-2">23-12-2024</p>
      </div>
    </div>
  );
}
