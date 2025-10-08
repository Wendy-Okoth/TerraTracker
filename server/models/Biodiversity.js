import mongoose from "mongoose";

const BiodiversitySchema = new mongoose.Schema({
  region: { type: String, required: true },
  speciesName: { type: String, required: true },
  populationCount: { type: Number, required: true },
  conservationStatus: { type: String, enum: ["Endangered", "Vulnerable", "Stable"], default: "Stable" },
  dateRecorded: { type: Date, default: Date.now }
});

export default mongoose.model("Biodiversity", BiodiversitySchema);
