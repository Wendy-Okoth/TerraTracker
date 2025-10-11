import mongoose from "mongoose";

const SoilHealthSchema = new mongoose.Schema({
  region: { type: String, required: true },
  pH: { type: Number, required: true },
  nitrogen: { type: Number, required: true },
  phosphorus: { type: Number, required: true },
  potassium: { type: Number, required: true },
  moisture: { type: Number },
  dateRecorded: { type: Date, default: Date.now }
});

export default mongoose.model("SoilHealth", SoilHealthSchema);
