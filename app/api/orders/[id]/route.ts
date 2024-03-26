import connectToDatabase from "@/libs/database";
import Order from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const orders = await Order.find({ user_id: params.id });
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 404 }
    );
  }
}
