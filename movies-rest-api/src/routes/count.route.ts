import { Router } from "express";
import { CountController } from "../controllers";
import { authenticateToken } from "../middleware";

const router = Router();

router.get(
  "/movies/:movieId/view-count",
  authenticateToken,
  CountController.getCount
);

router.post(
  "/movies/:movieId/view-count",
  authenticateToken,
  CountController.createCount
);

export default router;
