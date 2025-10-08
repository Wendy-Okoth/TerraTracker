import express from "express";
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Climate routes working!" });
});

export default router;

