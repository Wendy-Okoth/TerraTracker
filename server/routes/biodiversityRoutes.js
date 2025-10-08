import express from "express";
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Biodiversity routes working!" });
});

export default router;

