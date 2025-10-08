import mongoose from "mongoose";

const ClimateDataSchema = new mongoose.Schema({
  region: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  rainfall: { type: Number, required: true },
  windSpeed: { type: Number },
  dateRecorded: { type: Date, default: Date.now }
});

export default mongoose.model("ClimateData", ClimateDataSchema);
