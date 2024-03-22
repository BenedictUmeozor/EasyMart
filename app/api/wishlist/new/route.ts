import connectToDatabase from "@/libs/database";
import Wishlist from "@/models/wishlist";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { product, user_id } = await req.json();

    // Input validation
    if (!product || !user_id) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newProduct = new Wishlist({
      ...product,
      user_id,
    });

    await newProduct.save();

    const user = await User.findOneAndUpdate(
      { _id: user_id },
      { $push: { wishlist: newProduct._id } },
      { new: true }
    ).populate({
      path: "wishlist",
      select: "id",
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found while updating wishlist" },
        { status: 404 }
      );
    }

    return NextResponse.json({ wishlist: user.wishlist }, { status: 201 });
  } catch (error) {
    console.log("Error message: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
