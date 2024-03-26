import Order from "@/models/order";
import User from "@/models/user";
import Wishlist from "@/models/wishlist";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("Connected to MongoDB!");
      await Wishlist.find({});
      await User.find({});
      await Order.find({});
      console.log("Mongoose models are set!");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit process if connection fails
    process.exit(1);
  }
}

export default connectToDatabase;
