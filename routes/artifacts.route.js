
import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createArtifactController } from "../controllers/artifact.controller.js";

const router = express.Router();

// Create artifact (protected)
router.post("/", authMiddleware, createArtifactController);

// Example route (public)
router.get("/", (req, res) => {
  res.status(200).json({ message: "Artifacts route working" });
});

export default router;
