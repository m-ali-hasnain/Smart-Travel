import { stripe, API_URL } from "../configs/stripe.js";

export const createPayment = async (packageCharges) => {
  const price = packageCharges.packageCharges;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Tourism Package",
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${API_URL}/client?success=true`,
    cancel_url: `${API_URL}/client?canceled=true`,
  });
  return session.url;
};
