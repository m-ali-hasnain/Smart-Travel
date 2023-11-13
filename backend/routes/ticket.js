import express from "express";
import {
  getTicketById,
  getTickets,
  createTicket,
  updateTicketById,
  deleteTicketById,
} from "../controllers/ticket.js";
const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.get("/:tid", getTicketById);
router.post("/:tid", updateTicketById);
router.delete("/:tid", deleteTicketById);

export { router as ticketRouter };
