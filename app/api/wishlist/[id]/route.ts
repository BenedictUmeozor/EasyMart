import connectToDatabase from "@/libs/database";
import User from "@/models/user";
import Wishlist from "@/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const wishlist = await Wishlist.find({ user_id: params.id }).populate({
      path: "user_id",
      select: "_id",
    });

    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 404 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { user_id } = await req.json();
  try {
    await connectToDatabase();

    if (isNaN(Number(params.id))) {
      console.log("Number isNan " + params.id + " " + Number(params.id));
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }

    const wishlist = await Wishlist.exists({
      id: Number(params.id),
      user_id,
    });

    if (!wishlist) {
      return NextResponse.json(
        { error: "Wishlist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Wishlist exists" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const { user_id } = await req.json();

    const deletedProductDoc = await Wishlist.findByIdAndDelete(params.id);

    if (!deletedProductDoc) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: user_id },
      { $pull: { wishlist: params.id } },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    if ((err as Error).name === "CastError") {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
