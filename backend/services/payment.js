import { stripe, API_URL } from "../configs/stripe.js";
import { Payment } from "../models/payment.js";

export const createPayment = async (packageCharges) => {
  const price = packageCharges.packageCharges;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Charges",
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${API_URL}/payment/confirm`,
    cancel_url: `${API_URL}/client?canceled=true`,
  });

  try {
    await savePayment(session.id, price);
    return { sessionURL: session.url, sessionID: session.id };
  } catch (error) {
    throw new Error(`Payment could not be created: ${error}`);
  }
}

export const confirmPayment = async (id) => {
  const response = await stripe.checkout.sessions.retrieve(id);
  if (!response) throw new Error("Payment Could not be Verified");
  return response.payment_status;
};

export const savePayment = async (id, price) => {
  if (!id && !price) throw new Error(`Payment Details empty: ${id}`);
  const response = await Payment.create({
    charges: price,
    paymentDate: Date.now(),
    stripeSession: id,
    status: "unpaid",
  });
  if (!response) throw new Error("Payment could not be created: ", id);
  return response;
};
