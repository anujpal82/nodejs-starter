import { Router } from "express";
import { getAllStepsController } from "../controllers/steps.controller.js";
import { asyncHandler } from "../utils.js";
const router = Router();

router.get("/", asyncHandler(getAllStepsController));

export default router;
