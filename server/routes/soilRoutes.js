import express from "express";
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Soil routes working!" });
});

export default router;

