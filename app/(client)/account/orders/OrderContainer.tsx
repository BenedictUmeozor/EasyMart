import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import Order from "./Order";
import Link from "next/link";
import { Order as OrderType } from "@/types/types";

const getOrders = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${id}`
  );
  return res.json();
};

export default async function OrderContainer() {
  const session = await getAuth();

  const orders: OrderType[] = await getOrders((session?.user as any).id);

  return (
    <div>
      {!orders ||
        (!orders.length && (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">
                You&apos;ve made no orders yet
              </h2>
              <Link
                href="/products"
                className="bg-crimson text-white py-2 px-6 button-hover"
              >
                Order Now
              </Link>
            </div>
          </>
        ))}
      {orders?.length &&
        orders.map((order) => <Order key={order.order_no} order={order} />)}
    </div>
  );
}
