import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  charges: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  stripeSession: {
    type: String,
    required: true,
  },
});

export const Payment = model("payment", paymentSchema);
