import express from "express";
import { createPayment, confirmPayment } from "../controllers/payment.js";
const router = express.Router();

router.post("/intent", createPayment);
router.get("/confirm/:id", confirmPayment);

export { router as paymentRouter };
