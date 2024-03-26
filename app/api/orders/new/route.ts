import connectToDatabase from "@/libs/database";
import Order from "@/models/order";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      order_no,
      product_id,
      product_title,
      product_image,
      quantity,
      user_id,
      total
    } = await req.json();

    await connectToDatabase();

    const newOrder = new Order({
      order_no,
      product_id,
      product_title,
      product_image,
      quantity,
      user_id,
      total
    });

    await newOrder.save();

    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { $push: { orders: newOrder._id } },
      { new: true }
    );
    if (!user) {
      return NextResponse.json(
        { error: "User not found while updating order" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.log("Error message: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
