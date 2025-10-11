// server/routes/aiRoutes.js
import express from "express";
import OpenAI from "openai";
import BiodiversityData from "../models/BiodiversityData.js";
import ClimateData from "../models/ClimateData.js";
import SoilData from "../models/SoilData.js";

const router = express.Router();

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY not set. Please check your server/.env file.");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// GET /api/ai/analyze
router.get("/analyze", async (req, res) => {
  try {
    // Fetch database records
    const [bio, climate, soil] = await Promise.all([
      BiodiversityData.find().lean(),
      ClimateData.find().lean(),
      SoilData.find().lean(),
    ]);

    const counts = {
      biodiversityCount: bio.length,
      climateCount: climate.length,
      soilCount: soil.length,
    };

    const avg = (arr, key) =>
      arr.length ? arr.reduce((sum, x) => sum + (Number(x[key]) || 0), 0) / arr.length : null;

    const avgSoilPH = avg(soil, "pH");
    const avgTemp = avg(climate, "temperature");

    const prompt = `
You are an environmental AI assistant. Analyze the following dataset and provide:

1. A brief summary of environmental conditions.
2. Top 3 recommendations for improving ecosystem health.
3. Any potential environmental red flags.

DATA SUMMARY:
- Biodiversity records: ${counts.biodiversityCount}
- Climate records: ${counts.climateCount}
- Soil records: ${counts.soilCount}
- Average soil pH: ${avgSoilPH !== null ? avgSoilPH.toFixed(2) : "N/A"}
- Average temperature: ${avgTemp !== null ? avgTemp.toFixed(2) + "°C" : "N/A"}

Return results in plain text.
    `.trim();

    const response = await client.responses.create({
      model: "gpt-4o",
      input: prompt,
    });

    const aiText = response.output_text || "No output received from OpenAI API.";

    res.json({
      insights: aiText,
      stats: {
        ...counts,
        avgSoilPH: avgSoilPH !== null ? Number(avgSoilPH.toFixed(2)) : null,
        avgTemp: avgTemp !== null ? Number(avgTemp.toFixed(2)) : null,
      },
    });
  } catch (error) {
    console.error("AI analysis error:", error);
    res.status(500).json({
      message: "Error generating AI insights",
      error: error.message,
    });
  }
});

export default router;
