// src/pages/AIInsights.jsx
import React, { useState } from "react";
import axios from "axios";
import api from "../api";

function AIInsights() {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const generateInsights = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/ai/analyze");

      setInsights(res.data.insights);
    } catch (err) {
      console.error("Error generating insights:", err);
      setInsights("⚠️ Failed to generate insights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🌱 AI Insights Dashboard</h2>
      <p className="mb-4 text-gray-600">
        Click the button below to generate AI-powered insights based on
        Biodiversity, Soil, and Climate data.
      </p>
      <button
        onClick={generateInsights}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        {loading ? "Analyzing..." : "Generate Insights"}
      </button>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Generated Insights:</h3>
        <pre className="whitespace-pre-wrap text-gray-800">
          {insights || "No insights yet. Click 'Generate Insights' to begin."}
        </pre>
      </div>
    </div>
  );
}

export default AIInsights;

