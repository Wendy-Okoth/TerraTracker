// src/components/SoilList.js
import React, { useEffect, useState } from "react";
import api from "../api";

function SoilList() {
  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/soil");
        setSoilData(res.data);
      } catch (err) {
        console.error("Error fetching soil data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2>Soil Data</h2>
      {soilData.length === 0 ? (
        <p>No soil data available.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Region</th>
              <th>pH</th>
              <th>Nutrient Composition</th>
              <th>Moisture Level (%)</th>
            </tr>
          </thead>
          <tbody>
            {soilData.map((item) => (
              <tr key={item._id}>
                <td>{item.region}</td>
                <td>{item.ph}</td>
                <td>{item.nutrients}</td>
                <td>{item.moisture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SoilList;
