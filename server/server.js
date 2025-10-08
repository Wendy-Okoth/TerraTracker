import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from server folder
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();

// ✅ Import routes
import soilRoutes from "./routes/soilRoutes.js";
import climateRoutes from "./routes/climateRoutes.js";
import biodiversityRoutes from "./routes/biodiversityRoutes.js";

// ✅ Use routes
app.use("/api/soil", soilRoutes);
app.use("/api/climate", climateRoutes);
app.use("/api/biodiversity", biodiversityRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("🌍 TerraTracker Backend Running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.get("/api/ping", (req, res) => {
  res.json({ message: "TerraTracker API is live 🚀" });
});
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
