import { Schema, model } from "mongoose";
const orderSchema = new Schema({
  orderType: {
    type: String,
    enum: ["package", "tour", "ticket"],
    required: true,
  },
  tourName: {
    type: String,
    required: true,
  },
  tourDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  totalPersons: {
    type: Number,
    required: true,
  },
  pickupTime: {
    type: Date,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  stripeSessionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const Order = model("order", orderSchema);
