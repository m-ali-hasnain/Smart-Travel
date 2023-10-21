import { Router } from "express";
const router = Router();

import { revalidateToken } from "../middleware/auth.js";
import { login, renewToken, signup } from "../controllers/auth.js";

router.post("/refresh-token", revalidateToken, renewToken);
router.post("/login", login);
router.post("/signup", signup);

export { router as authRouter };
