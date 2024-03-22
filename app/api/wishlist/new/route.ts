import connectToDatabase from "@/libs/database";
import Wishlist from "@/models/wishlist";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { product, user_id } = await req.json();
    await connectToDatabase();

    const newProduct = new Wishlist({
      ...product,
      user_id,
    });
    console.log(newProduct)
    await newProduct.save();

    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { $push: { wishlist: newProduct._id } },
      { new: true }
    );

    console.log(user)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Added to wishlist" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
