import { Schema, model } from "mongoose";
const tourSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  images: {
    type: [],
    required: true,
  },
  videos: {
    type: [],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  milestone: {
    type: [],
    required: true,
  },
});

export const Tour = model("tour", tourSchema);
