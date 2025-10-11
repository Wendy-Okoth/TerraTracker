// server/controllers/aiController.js
export const analyzeData = async (req, res) => {
  try {
    // This is mock logic for now
    const mockInsight = `
      🌍 AI Insights Summary:
      - Biodiversity levels appear stable in 70% of regions.
      - Soil moisture trends indicate moderate drought risk.
      - Temperature anomalies detected in 3 monitoring zones.
      ✅ Recommendation: Focus reforestation in semi-arid regions.
    `;
    res.status(200).json({ insights: mockInsight });
  } catch (error) {
    console.error("AI Analysis Error:", error);
    res.status(500).json({ message: "AI analysis failed", error });
  }
};
