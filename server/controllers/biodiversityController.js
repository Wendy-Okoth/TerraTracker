import BiodiversityData from "../models/BiodiversityData.js";

// ✅ Get all biodiversity data
export const getAllBiodiversity = async (req, res) => {
  try {
    const data = await BiodiversityData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching biodiversity data", error });
  }
};

// ✅ Add new biodiversity record
export const addBiodiversityData = async (req, res) => {
  try {
    const newRecord = new BiodiversityData(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: "Error adding biodiversity data", error });
  }
};

// ✅ Get record by ID
export const getBiodiversityById = async (req, res) => {
  try {
    const record = await BiodiversityData.findById(req.params.id);
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching record", error });
  }
};

// ✅ Update
export const updateBiodiversityData = async (req, res) => {
  try {
    const updated = await BiodiversityData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating biodiversity data", error });
  }
};

// ✅ Delete
export const deleteBiodiversityData = async (req, res) => {
  try {
    await BiodiversityData.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting biodiversity data", error });
  }
};
