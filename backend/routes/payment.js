import express from "express";
import { createPayment } from "../controllers/payment.js";
const router = express.Router();

router.post("/intent", createPayment);

export { router as paymentRouter };
