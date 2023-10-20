import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.status(200).json({status:"Success", message:"Admin Page"})
});

export { router as adminRouter};
