import express from "express";
import {
  getPackageById,
  getPackages,
  createPackage,
  updatePackageById,
  deletePackageById,
} from "../controllers/package.js";
const router = express.Router();

router.get("/get", getPackages);
router.post("/create", createPackage);
router.get("/:pid", getPackageById);
router.post("/update/:pid", updatePackageById);
router.delete("/delete/:pid", deletePackageById);

export { router as packageRouter };
