import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.status(200).json({ message: "Artifacts route working" });
});

export default router;
