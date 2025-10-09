import SoilHealth from "../models/SoilHealth.js";

// ✅ Get all soil data
export const getAllSoilData = async (req, res) => {
  try {
    const data = await SoilHealth.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching soil data", error });
  }
};

// ✅ Add new soil record
export const addSoilData = async (req, res) => {
  try {
    const newSoil = new SoilHealth(req.body);
    await newSoil.save();
    res.status(201).json(newSoil);
  } catch (error) {
    res.status(400).json({ message: "Error adding soil data", error });
  }
};

// ✅ Get soil record by ID
export const getSoilById = async (req, res) => {
  try {
    const soil = await SoilHealth.findById(req.params.id);
    if (!soil) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(soil);
  } catch (error) {
    res.status(500).json({ message: "Error fetching record", error });
  }
};

// ✅ Update soil record
export const updateSoilData = async (req, res) => {
  try {
    const updated = await SoilHealth.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating soil data", error });
  }
};

// ✅ Delete soil record
export const deleteSoilData = async (req, res) => {
  try {
    await SoilHealth.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting soil data", error });
  }
};
