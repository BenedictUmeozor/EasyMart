import bcrypt from "bcryptjs";
import User from "@/models/user";
import connectToDatabase from "@/libs/database";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();

    const user = await User.findById(params.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { name, phoneNumber, address, current_password, new_password } =
      await req.json();

    if (current_password && new_password) {
      const isPasswordValid = await bcrypt.compare(
        current_password,
        user.password
      );
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: "Invalid password" },
          { status: 404 }
        );
      }
      const hashedPassword = await bcrypt.hash(new_password, 10);
      user.password = hashedPassword;
    }

    user.name = name;
    user.phoneNumber = phoneNumber;
    user.address = address;

    await user.save();

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
