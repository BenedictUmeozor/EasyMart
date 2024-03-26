import { Order as OrderType } from "@/types/types";
import { formatDate } from "@/utils/functions";
import Image from "next/image";

type Props = {
  order: OrderType;
};

export default function Order({ order }: Props) {
  return (
    <div className="flex flex-row gap-4 mb-4 shadow-sm py-2">
      <div className="flex-[2] flex items-center gap-2">
        <div>
          <Image
            src={order.product_image}
            alt="image"
            height={200}
            width={100}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <p className="font-semibold">{order.product_title}</p>
            <p className="text-xs text-gray-600">Order no: #{order.order_no.substring(0, 5)}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Qty: {order.quantity}</span>
            <span className="font-bold">${order.total}</span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[0.95rem] text-gray-500">Status:</p>
        <p className="text-success text-xl mt-2">Delivered</p>
      </div>

      <div className="flex-1">
        <p className="text-[0.95rem] text-gray-500">Delivered</p>
        <p className="ftext-gray-400 text-xs mt-2">{formatDate(order.createdAt)}</p>
      </div>
    </div>
  );
}
