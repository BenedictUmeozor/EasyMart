import Wishlist from "@/models/wishlist";
import connectToDatabase from "@/libs/database";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const wishlist = await Wishlist.find({}).populate("user_id");

    return NextResponse.json({ wishlist: wishlist }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 404 }
    );
  }
}
