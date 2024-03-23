import User from "@/models/user";
import connectToDatabase from "@/libs/database";
import { NextRequest, NextResponse } from "next/server";
import Wishlist from "@/models/wishlist";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();

    const { id } = params;

    const user = await User.findOne({ _id: id }).populate({
      path: "wishlist",
      select: "id",
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
