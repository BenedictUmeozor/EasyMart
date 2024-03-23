import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [{ type: String, required: true }],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Wishlist =
  mongoose.models?.Wishlist || mongoose.model("Wishlist", wishlistItemSchema);

export default Wishlist;
