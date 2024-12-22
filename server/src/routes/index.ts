import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import VerifyRoutes from "./verify.routes.js";
const router = Router();

router.use("/api/auth", AuthRoutes);
router.use("/", VerifyRoutes);

export default router;
