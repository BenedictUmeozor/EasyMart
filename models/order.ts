import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order_no: { type: String, required: true },
    product_id: { type: Number, required: true },
    product_title: { type: String, required: true },
    product_image: { type: String, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
