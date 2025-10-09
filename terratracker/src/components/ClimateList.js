// src/components/ClimateList.js
import React, { useEffect, useState } from "react";
import api from "../api";

function ClimateList() {
  const [climateData, setClimateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/climate");
        setClimateData(res.data);
      } catch (err) {
        console.error("Error fetching climate data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2>Climate Data</h2>
      {climateData.length === 0 ? (
        <p>No climate data available.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Region</th>
              <th>Temperature (°C)</th>
              <th>Rainfall (mm)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {climateData.map((item) => (
              <tr key={item._id}>
                <td>{item.region}</td>
                <td>{item.temperature}</td>
                <td>{item.rainfall}</td>
                <td>{item.humidity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClimateList;
