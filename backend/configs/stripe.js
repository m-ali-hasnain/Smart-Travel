import dotenv from "dotenv";
import Stripe from "stripe";
export const API_URL = dotenv.config()?.parsed.API_URL ?? "NO-API-URL";
export const stripe = new Stripe(dotenv.config()?.parsed.SECRET_STRIPE, {
  apiVersion: "2023-08-16",
});
