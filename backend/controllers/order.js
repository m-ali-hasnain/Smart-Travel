import * as orderService from "../services/order.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getOrders = async (req, res, next) => {
  try {
    const data = await orderService.getOrders();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const data = await orderService.createOrder(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateOrderById = async (req, res, next) => {
  try {
    const data = await orderService.updateOrderById(
      req.body,
      req.params.orderId,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const data = await orderService.getOrderById(req.params.orderId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteOrderById = async (req, res, next) => {
  try {
    const data = await orderService.deleteOrderById(req.params.orderId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
