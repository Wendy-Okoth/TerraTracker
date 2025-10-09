import ClimateData from "../models/ClimateData.js";

// ✅ Get all climate data
export const getAllClimateData = async (req, res) => {
  try {
    const data = await ClimateData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching climate data", error });
  }
};

// ✅ Add new climate record
export const addClimateData = async (req, res) => {
  try {
    const newRecord = new ClimateData(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: "Error adding climate data", error });
  }
};

// ✅ Get by ID
export const getClimateById = async (req, res) => {
  try {
    const record = await ClimateData.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching record", error });
  }
};

// ✅ Update
export const updateClimateData = async (req, res) => {
  try {
    const updated = await ClimateData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating climate data", error });
  }
};

// ✅ Delete
export const deleteClimateData = async (req, res) => {
  try {
    await ClimateData.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting climate data", error });
  }
};
