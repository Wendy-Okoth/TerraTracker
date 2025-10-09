// src/components/BiodiversityList.js
import React, { useEffect, useState } from "react";
import api from "../api";

function BiodiversityList() {
  const [biodiversity, setBiodiversity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/biodiversity");
        setBiodiversity(res.data);
      } catch (err) {
        console.error("Error fetching biodiversity data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2>Biodiversity Data</h2>
      {biodiversity.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Species Name</th>
              <th>Population</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {biodiversity.map((item) => (
              <tr key={item._id}>
                <td>{item.species}</td>
                <td>{item.population}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BiodiversityList;
