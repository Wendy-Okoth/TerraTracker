import express from "express";
import {
  getAllClimateData,
  addClimateData,
  getClimateById,
  updateClimateData,
  deleteClimateData,
} from "../controllers/climateController.js";

const router = express.Router();

// 🌤 Climate routes
router.get("/", getAllClimateData);       // GET all climate data
router.post("/", addClimateData);         // POST new climate record
router.get("/:id", getClimateById);       // GET single record by ID
router.put("/:id", updateClimateData);    // PUT update record
router.delete("/:id", deleteClimateData); // DELETE record

export default router;

