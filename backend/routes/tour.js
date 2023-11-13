import express from "express";
import {
  getTourById,
  getTours,
  createTour,
  updateTourById,
  deleteTourById,
} from "../controllers/tour.js";
const router = express.Router();

router.get("/", getTours);
router.post("/", createTour);
router.get("/:tourId", getTourById);
router.post("/:tourId", updateTourById);
router.delete("/:tourId", deleteTourById);

export { router as tourRouter };
