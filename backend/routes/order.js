import express from "express";
import {
  getOrderById,
  getOrders,
  createOrder,
  updateOrderById,
  deleteOrderById,
} from "../controllers/order.js";
const router = express.Router();

router.get("/get", getOrders);
router.post("/create", createOrder);
router.get("/:orderId", getOrderById);
router.post("/:orderId", updateOrderById);
router.delete("/:orderId", deleteOrderById);

export { router as orderRouter };
