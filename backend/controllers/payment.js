import * as stripeService from "../services/payment.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";
export const createPayment = async (req, res, next) => {
  try {
    const data = await stripeService.createPayment(req.body);

    handleResponse(res, 200, data);
  } catch (error) {
    console.log("here");
    handleError(error, res, next);
  }
};

export const confirmPayment = async (req, res, next) => {
  try {
    // id checkout ID
    const data = await stripeService.confirmPayment(req.params.id);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
