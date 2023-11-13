import { Order } from "../models/order.js";

export const getOrders = async () => {
  const response = await Order.find({});
  if (!response) throw new Error("Orders could not be found");
  return response;
};

export const getOrderById = async (oid) => {
  if (!oid) throw new Error("Order Id empty:", oid);
  const response = await Order.findById({ _id: oid });
  if (!response) throw new Error("Order could not be found: ", oid);
  return response;
};

export const createOrder = async (orderDetails) => {
  if (!orderDetails) throw new Error(`Order Details empty: ${orderDetails}`);
  const response = await Order.create(orderDetails);
  if (!response) throw new Error("Order could not be created: ", orderDetails);
  return response;
};

export const updateOrderById = async (orderDetails, oid) => {
  if (!oid || !orderDetails)
    throw new Error(
      `Order Id empty: ${oid} or Order Details empty: ${orderDetails}`,
    );
  const response = await Order.findOneAndUpdate({ _id: oid }, orderDetails, {
    upsert: true,
    returnOriginal: false,
  });
  if (!response) throw new Error("Order could not be updated: ", orderDetails);
  return response;
};

export const deleteOrderById = async (oid) => {
  if (!oid) throw new Error("Order Id empty:", oid);
  const response = await Order.findByIdAndDelete({ _id: oid });
  if (!response) throw new Error("Order could not be deleted: ", oid);
  return response;
};
