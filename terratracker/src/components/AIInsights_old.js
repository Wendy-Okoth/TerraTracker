// src/components/AIInsights.js
import React from "react";

function AIInsights() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">🤖 AI Insights</h2>
      <p className="mb-4 text-gray-700">
        Harnessing artificial intelligence to analyze soil, climate, and biodiversity data.
        This section will display AI-generated insights such as:
      </p>
      <ul className="list-disc ml-6 text-gray-800">
        <li>Predicted soil degradation zones</li>
        <li>Optimal reforestation regions</li>
        <li>AI-based crop yield predictions</li>
        <li>Climate risk and resilience reports</li>
      </ul>

      <div className="mt-6 bg-green-100 p-4 rounded-lg border border-green-300">
        <p>
          🌍 <strong>Coming Soon:</strong> Integration with machine learning models
          to generate actionable sustainability recommendations.
        </p>
      </div>
    </div>
  );
}

export default AIInsights;
