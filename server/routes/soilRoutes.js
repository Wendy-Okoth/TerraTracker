import express from "express";
import {
  getAllSoilData,
  addSoilData,
  getSoilById,
  updateSoilData,
  deleteSoilData,
} from "../controllers/soilController.js";

const router = express.Router();

// 🌾 Soil routes
router.get("/", getAllSoilData);         // GET all soil data
router.post("/", addSoilData);           // POST new soil data
router.get("/:id", getSoilById);         // GET single soil record by ID
router.put("/:id", updateSoilData);      // PUT update soil record
router.delete("/:id", deleteSoilData);   // DELETE soil record

export default router;

