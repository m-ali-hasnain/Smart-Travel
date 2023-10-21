import express from "express";
import {
  getPackageById,
  getPackages,
  createPackage,
  updatePackageById,
  deletePackageById,
} from "../controllers/package.js";
const router = express.Router();

router.get("/", getPackages);
router.post("/", createPackage);
router.get("/:pid", getPackageById);
router.post("/:pid", updatePackageById);
router.delete("/:pid", deletePackageById);

export { router as packageRouter };
