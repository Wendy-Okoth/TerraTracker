import express from "express";
import {
  getAllBiodiversity,
  addBiodiversityData,
  getBiodiversityById,
  updateBiodiversityData,
  deleteBiodiversityData,
} from "../controllers/biodiversityController.js";

const router = express.Router();

// 🐾 Biodiversity routes
router.get("/", getAllBiodiversity);               // GET all biodiversity data
router.post("/", addBiodiversityData);             // POST new biodiversity record
router.get("/:id", getBiodiversityById);           // GET record by ID
router.put("/:id", updateBiodiversityData);        // PUT update record
router.delete("/:id", deleteBiodiversityData);     // DELETE record

export default router;

